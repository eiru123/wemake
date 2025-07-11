import IdeaCard from '~/features/ideas/components/idea-card';

export function meta() {
	return [{ title: 'Dashboard Ideas | Wemake' }];
}

export default function DashboardIdeasPage() {
	return (
		<div className='space-y-5 h-full'>
			<h1 className='text-2xl font-semibold mb-6 block'>Claimed Ideas</h1>
			<div className='grid grid-cols-4 gap-4'>
				{Array.from({ length: 5 }).map((_, index) => (
					<IdeaCard
						id={`ideaId-${index}`}
						title='A startup that create an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress. using a mobile app to track workouts and progress as well as website to manage the business'
						viewsCount={123}
						likesCount={12}
						postedAt='12 hours ago'
					/>
				))}
			</div>
		</div>
	);
}
