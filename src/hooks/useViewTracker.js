import { useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

// Hook to track page views
export const useViewTracker = (pagePath = null) => {
  const trackView = useCallback(async (customPath = null) => {
    try {
      const path = customPath || pagePath || window.location.pathname
      
      // Get user agent for device type detection
      const userAgent = navigator.userAgent
      let deviceType = 'desktop'
      
      // Simple device detection
      if (userAgent) {
        if (/Mobile|Android|iPhone/.test(userAgent)) {
          deviceType = 'mobile'
        } else if (/Tablet|iPad/.test(userAgent)) {
          deviceType = 'tablet'
        } else {
          deviceType = 'desktop'
        }
      }
      
      // Insert view record with only required fields
      const { data, error } = await supabase
        .from('views')
        .insert([
          {
            page_path: path,
            device_type: deviceType,
            // ip_address and created_at will be handled by database
            // created_at is automatically set by DEFAULT NOW()
            // ip_address can be set by database trigger or edge function
          }
        ])
      
      if (error) {
        console.error('Error tracking view:', error)
        return false
      }
      
      console.log('View tracked successfully:', data)
      return true
      
    } catch (error) {
      console.error('Error in view tracking:', error)
      return false
    }
  }, [pagePath])
  
  // Automatically track view on mount if pagePath is provided
  useEffect(() => {
    if (pagePath) {
      trackView()
    }
  }, [pagePath, trackView])
  
  return { trackView }
}

// Hook to get view statistics
export const useViewStats = (pagePath = null) => {
  const getStats = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .rpc('get_view_stats', { page_filter: pagePath })
      
      if (error) {
        console.error('Error fetching view stats:', error)
        return null
      }
      
      return data
    } catch (error) {
      console.error('Error in getStats:', error)
      return null
    }
  }, [pagePath])
  
  const getTotalViews = useCallback(async (path = null) => {
    try {
      const query = supabase
        .from('views')
        .select('*', { count: 'exact', head: true })
      
      if (path) {
        query.eq('page_path', path)
      }
      
      const { count, error } = await query
      
      if (error) {
        console.error('Error fetching total views:', error)
        return 0
      }
      
      return count || 0
    } catch (error) {
      console.error('Error in getTotalViews:', error)
      return 0
    }
  }, [])
  
  const getUniqueVisitors = useCallback(async (path = null) => {
    try {
      let query = supabase
        .from('views')
        .select('ip_address')
      
      if (path) {
        query = query.eq('page_path', path)
      }
      
      const { data, error } = await query
      
      if (error) {
        console.error('Error fetching unique visitors:', error)
        return 0
      }
      
      // Count unique IP addresses
      const uniqueIPs = new Set(data?.map(item => item.ip_address).filter(Boolean))
      return uniqueIPs.size
    } catch (error) {
      console.error('Error in getUniqueVisitors:', error)
      return 0
    }
  }, [])
  
  const getPopularPages = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('popular_pages')
        .select('*')
        .order('total_views', { ascending: false })
        .limit(10)
      
      if (error) {
        console.error('Error fetching popular pages:', error)
        return []
      }
      
      return data || []
    } catch (error) {
      console.error('Error in getPopularPages:', error)
      return []
    }
  }, [])
  
  return {
    getStats,
    getTotalViews,
    getUniqueVisitors,
    getPopularPages
  }
}
