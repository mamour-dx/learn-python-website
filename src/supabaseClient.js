import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL and Key are required.");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// Fetch all topics
export const fetchTopics = async () => {
  const { data, error } = await supabase
    .from('topics')
    .select('*');

  if (error) {
    console.error('Error fetching topics:', error);
    throw new Error('Could not fetch topics');
  }

  return data;
};

// Fetch questions based on topic ID
export const fetchQuestionsByTopic = async (topicId) => {
  const { data, error } = await supabase
    .from('questions')
    .select('*')
    .eq('topic_id', topicId);

  if (error) {
    console.error('Error fetching questions:', error);
    throw new Error('Could not fetch questions');
  }

  return data;
};

