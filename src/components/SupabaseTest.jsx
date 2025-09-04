import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const SupabaseTest = () => {
  const [status, setStatus] = useState('Checking connection...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Test if environment variables are loaded
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
        
        console.log('Environment check:');
        console.log('- Supabase URL exists:', !!supabaseUrl);
        console.log('- Supabase URL value:', supabaseUrl);
        console.log('- Supabase Key exists:', !!supabaseKey);
        console.log('- All env vars:', import.meta.env);

        if (!supabaseUrl || !supabaseKey) {
          throw new Error(`Missing environment variables:
            - VITE_SUPABASE_URL: ${supabaseUrl ? 'Found' : 'Missing'}
            - VITE_SUPABASE_ANON_KEY: ${supabaseKey ? 'Found' : 'Missing'}
          `);
        }

        // Test database connection
        console.log('Testing database connection...');
        const { data, error, count } = await supabase
          .from('views')
          .select('*', { count: 'exact', head: true });

        if (error) {
          throw error;
        }

        setStatus(`✅ Connection successful! Views table has ${count || 0} records.`);
        console.log('Database connection successful!');
      } catch (err) {
        console.error('Supabase connection error:', err);
        setError(err.message);
        setStatus('❌ Connection failed');
      }
    };

    testConnection();
  }, []);

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      padding: '10px', 
      border: '1px solid #ccc',
      borderRadius: '5px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4>Supabase Status</h4>
      <p>{status}</p>
      {error && (
        <div style={{ color: 'red', fontSize: '12px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default SupabaseTest;
