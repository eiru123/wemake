// import db from '~/db';
// import { postUpvotes, posts, topics } from './schema';
// import { profiles } from '../users/schema';
// import { asc, count, eq } from 'drizzle-orm';

import client from '~/supa-client';
// drizzle을 사용하면 supabase 기능들(인증, 로그인세션)을 사용할 수 없다.
// export const getTopics = async () => {
// 	const allTopics = await db
// 		.select({
// 			name: topics.name,
// 			slug: topics.slug,
// 		})
// 		.from(topics);
// 	return allTopics;
// };

// export const getPosts = async () => {
// 	const allPosts = await db
// 		.select({
// 			// 이름이 꼭 같을 필요는 없다.
// 			id: posts.post_id,
// 			title: posts.title,
// 			createdAt: posts.created_at,
// 			topic: topics.name,
// 			author: profiles.name,
// 			authorAvatarUrl: profiles.avatar,
// 			username: profiles.username,
// 			upvotes: count(postUpvotes.post_id),
// 		})
// 		.from(posts)
// 		.innerJoin(topics, eq(posts.topic_id, topics.topic_id))
// 		.innerJoin(profiles, eq(posts.profile_id, profiles.profile_id))
// 		.leftJoin(postUpvotes, eq(posts.post_id, postUpvotes.post_id))
// 		.groupBy(
// 			posts.post_id,
// 			profiles.name,
// 			profiles.avatar,
// 			profiles.username,
// 			topics.name
// 		)
// 		.orderBy(asc(posts.post_id));
// 	return allPosts;
// };

export const getTopics = async () => {
	await new Promise((resolve) => setTimeout(resolve, 4000));
	const { data, error } = await client.from('topics').select('name, slug');

	if (error) {
		throw new Error(error.message);
	}
	return data;
};

// supabase는 left join을 사용한다.
export const getPosts = async () => {
	/**
	 * post는 posts_upvotes와 profile 테이블과 연결되어 있음
	 */
	await new Promise((resolve) => setTimeout(resolve, 4000));
	const { data, error } = await client
		.from('community_post_list_view')
		.select(`*`);
	console.log(data, error);
	if (error) {
		throw new Error(error.message);
	}
	return data;
};

// join aggregate function 등을 쓸 때는 view를 만들어 사용한다.
// type-fest로 type을 오버라이드 할 수 있다.
