import {
	bigint,
	boolean,
	jsonb,
	pgEnum,
	pgSchema,
	pgTable,
	primaryKey,
	text,
	timestamp,
	uuid,
} from 'drizzle-orm/pg-core';
import { products } from '../products/schema';
import { posts } from '../community/schema';

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

export const notificationTypes = pgEnum('notification_types', [
	'follow',
	'review',
	'reply',
	'mention',
]);

export const notifications = pgTable('notifications', {
	notification_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	source_id: uuid().references(() => profiles.profile_id, {
		onDelete: 'cascade',
	}),
	product_id: bigint({ mode: 'number' }).references(() => products.product_id, {
		onDelete: 'cascade',
	}),
	post_id: bigint({ mode: 'number' }).references(() => posts.post_id, {
		onDelete: 'cascade',
	}),
	target_id: uuid()
		.references(() => profiles.profile_id, {
			onDelete: 'cascade',
		})
		.notNull(),
	type: notificationTypes().notNull(),
	created_at: timestamp().notNull().defaultNow(),
});

export const messageRooms = pgTable('message_rooms', {
	message_room_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	created_at: timestamp().notNull().defaultNow(),
});

// messageRoom users 연결 테이블
export const messageRoomMembers = pgTable(
	'message_room_members',
	{
		message_room_id: bigint({ mode: 'number' }).references(
			() => messageRooms.message_room_id,
			{
				onDelete: 'cascade',
			}
		),
		profile_id: uuid().references(() => profiles.profile_id, {
			onDelete: 'cascade',
		}),
		created_at: timestamp().notNull().defaultNow(),
	},
	(table) => [
		primaryKey({ columns: [table.message_room_id, table.profile_id] }),
	]
);

// 모델 또는 테이블
export const messages = pgTable('messages', {
	message_id: bigint({ mode: 'number' })
		.primaryKey()
		.generatedByDefaultAsIdentity(),
	message_room_id: bigint({ mode: 'number' }).references(
		() => messageRooms.message_room_id,
		{
			onDelete: 'cascade',
		}
	),
	sender: uuid().references(() => profiles.profile_id, {
		onDelete: 'cascade',
	}),
	content: text().notNull(),
	seen: boolean().notNull().default(false),
	// seen_by: integer().notNull().default(0), 여러 명 존재하는 방에서 읽었는지 표시. 채팅방 사람 - seen_by
	created_at: timestamp().notNull().defaultNow(),
});
