import {
	jsonb,
	pgEnum,
	pgSchema,
	pgTable,
	text,
	timestamp,
	uuid,
} from 'drizzle-orm/pg-core';

// typescript 조건을 맞추기 위한 테이블. 실제로 적용은 안된다. 이미 존재하기때문에 적용이 안됨.
// drizzle에게 알려주는 용도
export const users = pgSchema('auth').table('users', {
	id: uuid().primaryKey(),
});

export const roles = pgEnum('role', [
	'developer',
	'desinger',
	'markteter',
	'founder',
	'product-manager',
]);

export const profiles = pgTable('profiles', {
	profile_id: uuid()
		.primaryKey()
		.references(() => users.id, {
			onDelete: 'cascade',
		}), // user table의 foreign key
	avatar: text(),
	name: text().notNull(),
	username: text().notNull(),
	headline: text(),
	bio: text(),
	role: roles().default('developer').notNull(),
	stats: jsonb().$type<{
		followers: number;
		following: number;
	}>(),
	views: jsonb(),
	updated_at: timestamp().notNull().defaultNow(),
	created_at: timestamp().notNull().defaultNow(),
});

// foreign key 참조 관계라 삭제될때 어떻게 할지 정해야 한다.
export const follows = pgTable('follows', {
	follower_id: uuid().references(() => profiles.profile_id, {
		onDelete: 'cascade',
	}),
	following_id: uuid().references(() => profiles.profile_id, {
		onDelete: 'cascade',
	}),
	created_at: timestamp().notNull().defaultNow(),
});
