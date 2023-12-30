import { createContext } from "react";
import { createClient } from '@supabase/supabase-js';

const SupabaseClient = createClient("https://rrlornksfpigswqaxtjd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJybG9ybmtzZnBpZ3N3cWF4dGpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxNDY2NTMsImV4cCI6MjAxMjcyMjY1M30.koiEhrPlXfhnXACQHrg4Lf3Axa8GQ97q3QiHPJ9AU_8"
)


// Use a custom domain as the supabase URL
export const SupabaseContext = createContext(SupabaseClient);
