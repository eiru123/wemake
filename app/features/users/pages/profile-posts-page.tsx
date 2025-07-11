import PostCard from '~/features/community/components/post-card';

export function meta() {
	return [{ title: 'Profile Posts | Wemake' }];
}

export default function ProfilePostsPage() {
	return (
		<div className='flex flex-col gap-5'>
			{Array.from({ length: 5 }).map((_, index) => (
				<PostCard
					id={`postId-${index}`}
					title='What is the best productivity tool?'
					author='Nico'
					authorAvatarUrl='https://github.com/apple.png'
					category='productivity'
					postedAt='12 hours ago'
					avatarFallback='N'
					expanded
				/>
			))}
		</div>
	);
}
