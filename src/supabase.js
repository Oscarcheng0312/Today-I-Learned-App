import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gnmaardswylqolvxjskt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdubWFhcmRzd3lscW9sdnhqc2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjE4NzgsImV4cCI6MjA1NTQzNzg3OH0.ctvjEqSpb0r4DHDwfLidRfSn1hFMzwrwHGo5PNevmFA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
