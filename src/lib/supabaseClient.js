
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'SUPABASE_URL'
const supabaseKey = 'API_KEY'
export const supabase = createClient(supabaseUrl, supabaseKey)