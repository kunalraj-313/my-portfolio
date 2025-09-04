import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export const useViewCounter = () => {
  const [viewCount, setViewCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleViewCount = async () => {
      try {
        // Increment the view count
        const { data, error } = await supabase.rpc('increment_view_count')
        
        if (error) {
          console.error('Error incrementing view count:', error)
          // Fallback: just get current count
          const { data: countData, error: countError } = await supabase.rpc('get_view_count')
          if (!countError) {
            setViewCount(countData || 0)
          }
        } else {
          setViewCount(data || 0)
        }
      } catch (error) {
        console.error('View counter error:', error)
        setViewCount(0)
      } finally {
        setLoading(false)
      }
    }

    handleViewCount()
  }, [])

  return { viewCount, loading }
}
