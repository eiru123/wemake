import { bigint, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from './constants';

export const jobTypes = pgEnum(
	'job_type',
	JOB_TYPES.map((type) => type.value) as [string, ...string[]]
);

export const locations = pgEnum(
	'location',
	LOCATION_TYPES.map((type) => type.value) as [string, ...string[]]
);

export const salaryRanges = pgEnum('salary_range', SALARY_RANGE);

// users 테이블은 이미 supabase에 만들어져 있으므로 건드리면 안된다.
// snake case로 작성
export const jobs = pgTable('jobs', {
	job_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	position: text().notNull(),
	overview: text().notNull(),
	responsibilities: text().notNull(),
	qualifications: text().notNull(),
	benefits: text().notNull(),
	skills: text().notNull(),
	company_name: text().notNull(),
	company_logo: text().notNull(),
	company_location: text().notNull(),
	apply_url: text().notNull(),
	job_type: jobTypes().notNull(),
	location: locations().notNull(),
	salary_range: salaryRanges().notNull(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
});
