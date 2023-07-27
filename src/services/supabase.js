import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cqfuggsltsuyomufzwfz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZnVnZ3NsdHN1eW9tdWZ6d2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4Mjk3MTgsImV4cCI6MjAwNDQwNTcxOH0.fgbQpIZiitBZRQLdY5bLHuYUowa3AjTLAl5As5VHunU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
