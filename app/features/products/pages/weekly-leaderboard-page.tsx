import { type MetaFunction } from 'react-router';
import type { Route } from './+types/weekly-leaderboard-page';

export function loader({ request, params }: Route.LoaderArgs) {
	const { year, week } = params;

	return {
		year,
		week,
		topProducts: [],
		totalProducts: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{ title: `Week ${data?.week} ${data?.year} Leaderboard | wemake` },
		{
			name: 'description',
			content: `Top products from week ${data?.week} of ${data?.year}`,
		},
	];
};

export default function WeeklyLeaderboardPage({
	loaderData,
}: Route.ComponentProps) {
	const { year, week, topProducts } = loaderData;

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					Week {week} {year} Leaderboard
				</h1>
				<p className='text-xl text-muted-foreground'>
					Top products from week {week} of {year}
				</p>
			</div>

			<div className='space-y-4'>
				{/* Weekly leaderboard items will be rendered here */}
			</div>
		</div>
	);
}
