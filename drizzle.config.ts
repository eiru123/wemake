import { defineConfig } from 'drizzle-kit';

// drizzle kit 이 확인할 때 사용
export default defineConfig({
	schema: './app/features/**/schema.ts',
	out: './app/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});
