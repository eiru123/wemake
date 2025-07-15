import {
	bigint,
	check,
	integer,
	pgEnum,
	pgTable,
	text,
	timestamp,
} from 'drizzle-orm/pg-core';
import { PRODUCT_STAGES } from './constants';
import { sql } from 'drizzle-orm';

// 항상 만든건 export 해야 제대로 generate된다.
export const productStages = pgEnum(
	'product_stages',
	PRODUCT_STAGES.map((stage) => stage.value) as [string, ...string[]]
);

export const team = pgTable(
	'team',
	{
		team_id: bigint({ mode: 'number' })
			.primaryKey()
			.generatedByDefaultAsIdentity(),
		product_name: text().notNull(),
		team_size: integer().notNull(),
		equity_split: integer().notNull(),
		product_stage: productStages().notNull(),
		roles: text().notNull(),
		product_description: text().notNull(),
		created_at: timestamp().notNull().defaultNow(),
		updated_at: timestamp().notNull().defaultNow(),
		// 구 버전에서는 constaint를 추가할 때 객체를 리턴해서 추가함. 현재는 배열로 추가
	},
	(table) => [
		// BETWEEN은 숫자용 text에는 못쓴다.
		check('team_size_check', sql`${table.team_size} BETWEEN 1 AND 100`),
		check('equity_split_check', sql`${table.equity_split} BETWEEN 1 AND 100`),
		check(
			'product_description_check',
			sql`LENGTH(${table.product_description}) <= 200`
		),
	]
);
