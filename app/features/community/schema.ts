import {
	bigint,
	pgTable,
	primaryKey,
	text,
	timestamp,
	uuid,
	type AnyPgColumn,
} from 'drizzle-orm/pg-core';
import { profiles } from '../users/schema';

export const topics = pgTable('topics', {
	topic_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	name: text().notNull(),
	slug: text().notNull(), // name의 친화적인 버전
	created_at: timestamp().notNull().defaultNow(),
});

export const posts = pgTable('posts', {
	post_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	title: text().notNull(),
	content: text().notNull(),
	upvotes: bigint({ mode: 'number' }).default(0),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
	topic_id: bigint({ mode: 'number' }).references(() => topics.topic_id, {
		onDelete: 'cascade',
	}),
	profile_id: uuid().references(() => profiles.profile_id, {
		onDelete: 'cascade',
	}),
});

export const postUpvotes = pgTable(
	'post_upvotes',
	{
		post_id: bigint({ mode: 'number' }).references(() => posts.post_id, {
			onDelete: 'cascade',
		}),
		profile_id: uuid().references(() => profiles.profile_id, {
			onDelete: 'cascade',
		}),
	},
	(table) => [primaryKey({ columns: [table.post_id, table.profile_id] })]
);

export const postReplies = pgTable('post_replies', {
	post_reply_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	post_id: bigint({ mode: 'number' }).references(() => posts.post_id, {
		onDelete: 'cascade',
	}),
	// 스스로 참조할 수 없다. 이건 ts 제한. AnyPgColumn 추가로 해결
	parent_id: bigint({ mode: 'number' }).references(
		(): AnyPgColumn => postReplies.post_reply_id,
		{
			onDelete: 'cascade',
		}
	),
	profile_id: uuid()
		.references(() => profiles.profile_id, {
			onDelete: 'cascade',
		})
		.notNull(),
	reply: text().notNull(),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp().notNull().defaultNow(),
});
