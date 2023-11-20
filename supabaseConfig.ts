// supabaseConfig.js

import { createClient } from '@supabase/supabase-js';
import { SERVER_URL } from './service/apiConfigMySQL';

// Configura tu cliente de Supabase
const supabase = createClient(
'https://qykhqwrmpnntyousqush.supabase.co', // Reemplaza con la URL de tu proyecto en Supabase
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5a2hxd3JtcG5udHlvdXNxdXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxOTczNjgsImV4cCI6MjAxNTc3MzM2OH0.GC_BuTqR5dMjbtEK-HOGVyfQlzyA7XewZwjP_ylEkrc' // Reemplaza con tu clave pública anónima
);



export default supabase;
