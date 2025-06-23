import { type MetaFunction } from 'react-router';
import type { Route } from './+types/leaderboard-page';

export function loader({ request }: Route.LoaderArgs) {
	return {
		topProducts: [],
		timeFrame: 'all-time',
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Leaderboard | wemake' },
		{ name: 'description', content: 'Top products ranked by our community' },
	];
};

export default function LeaderboardPage() {
	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>Leaderboard</h1>
				<p className='text-xl text-muted-foreground'>
					Top products ranked by our community
				</p>
			</div>

			<div className='space-y-4'>
				{/* Leaderboard items will be rendered here */}
			</div>
		</div>
	);
}
