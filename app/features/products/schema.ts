import {
	bigint,
	check,
	integer,
	jsonb,
	pgTable,
	primaryKey,
	text,
	timestamp,
	uuid,
} from 'drizzle-orm/pg-core';
import { profiles } from '../users/schema';
import { sql } from 'drizzle-orm';

export const products = pgTable('products', {
	product_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	name: text().notNull(),
	tagline: text().notNull(),
	description: text().notNull(),
	how_it_works: text().notNull(),
	icon: text().notNull(),
	url: text().notNull(),
	stats: jsonb().notNull().default({ views: 0, reviews: 0 }),
	profile_id: uuid()
		.references(() => profiles.profile_id, {
			onDelete: 'cascade',
		})
		.notNull(),
	category_id: bigint({ mode: 'number' }).references(
		// 참조하는건 type이 같아야 한다.
		() => categories.category_id,
		{
			onDelete: 'set null', // category를 삭제해도 product는 남아있게 하기 위해서
		}
	),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
});

export const categories = pgTable('categories', {
	category_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	name: text().notNull(),
	description: text().notNull(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
});

export const product_upvotes = pgTable(
	'product_upvotes',
	{
		product_id: bigint({ mode: 'number' }).references(
			() => products.product_id,
			{
				onDelete: 'cascade',
			}
		),
		// composite primary key
		// 테이블을 만들 때, primary key가 여러 column으로 구성된 것을 말함.
		// 유저가 같은 제품에 대해 여러 개의 upvote를 만들 수 없게 하기 위함.
		profile_id: uuid().references(() => profiles.profile_id, {
			onDelete: 'cascade',
		}),
		created_at: timestamp().notNull().defaultNow(),
	},
	(table) => [primaryKey({ columns: [table.product_id, table.profile_id] })]
);
// 마지막 인자에 constraints를 추가할 수 있다.

export const reviews = pgTable(
	'reviews',
	{
		review_id: bigint({ mode: 'number' })
			.primaryKey()
			.generatedByDefaultAsIdentity(),
		product_id: bigint({ mode: 'number' }).references(
			() => products.product_id,
			{
				onDelete: 'cascade',
			}
		),
		profile_id: uuid().references(() => profiles.profile_id, {
			onDelete: 'cascade',
		}),
		rating: integer().notNull(),
		review: text().notNull(),
		created_at: timestamp().notNull().defaultNow(),
		updated_at: timestamp().notNull().defaultNow(),
	},
	// sql injection 공격을 방지하기 위해 sql 템플릿을 사용한다.
	(table) => [check('rating_check', sql`${table.rating} BETWEEN 1 AND 5`)]
);
