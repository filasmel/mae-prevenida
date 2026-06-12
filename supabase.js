// Aguarda o SDK carregar antes de inicializar
const { createClient } = window.supabase;

const SUPABASE_URL = 'https://ruwhxvckbcomlnysrvzv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1d2h4dmNrYmNvbWxueXNydnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNjE1MzgsImV4cCI6MjA5NjczNzUzOH0.Ah4EI31JZTs9AmISW6nMlJ2VUO0vKbRg3JyWukp4o0Y';

const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
