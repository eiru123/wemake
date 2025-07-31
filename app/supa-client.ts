import { createClient } from '@supabase/supabase-js';
import type { Database as SupabaseDatabase } from 'database.types';
import type { MergeDeep, SetFieldType, SetNonNullable } from 'type-fest';

type Database = MergeDeep<
	SupabaseDatabase,
	{
		public: {
			Views: {
				community_post_list_view: {
					Row: SetFieldType<
						SetNonNullable<
							SupabaseDatabase['public']['Views']['community_post_list_view']['Row']
						>,
						'author_avatar',
						'string' | null
					>;
				};
			};
		};
	}
>;

const client = createClient<Database>(
	// process.env.SUPABASE_URL!,
	// process.env.SUPABASE_ANON_KEY!
	'https://aawfhpbhywtlrhcnfnna.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhd2ZocGJoeXd0bHJoY25mbm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMTAzMzksImV4cCI6MjA2Nzc4NjMzOX0.j4GrLsx35HxvMpIR9eje89X6Mw3daqldaO_4hGeODLI'
);

export default client;
