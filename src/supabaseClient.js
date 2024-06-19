// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://najejupoxijvnvekugcd.supabase.co" ;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hamVqdXBveGlqdm52ZWt1Z2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0OTUzMTgsImV4cCI6MjAzMzA3MTMxOH0.4R0tgWJd7sp4Q3T931LvjFzjmHBavz6C45vSKDFqLbs";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all quizzes
export const fetchQuizzes = async () => {
    const { data, error } = await supabase
      .from('quizzes')
      .select('id, title, topic_id, topics (name)'); 
  
    if (error) {
      console.error('Error fetching quizzes:', error);
      return [];
    }
  
    return data;
  };
