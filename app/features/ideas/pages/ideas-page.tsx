import { Hero } from '~/common/components/hero';
import type { Route } from './+types/ideas-page';
import IdeaCard from '../components/idea-card';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'IdeasGPT | wemake' },
		{ name: 'description', content: 'Browse and discover innovative ideas' },
	];
};

export default function IdeasPage() {
	return (
		<div className='space-y-20'>
			<Hero title='IdeasGPT' subtitle='Find ideas for your next project' />
			<div className='grid grid-cols-4 gap-4'>
				{Array.from({ length: 10 }).map((_, index) => (
					<IdeaCard
						id={`ideaId-${index}`}
						title='A startup that create an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress. using a mobile app to track workouts and progress as well as website to manage the business'
						viewsCount={123}
						likesCount={12}
						postedAt='12 hours ago'
						claimed={index % 2 === 0}
					/>
				))}
			</div>
		</div>
	);
}
