import { type MetaFunction } from 'react-router';
import type { Route } from './+types/monthly-leaderboard-page';

export function loader({ request, params }: Route.LoaderArgs) {
	const { year, month } = params;

	return {
		year,
		month,
		topProducts: [],
		totalProducts: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const monthName = new Date(
		Number(data?.year),
		Number(data?.month) - 1
	).toLocaleDateString('en-US', { month: 'long' });

	return [
		{ title: `${monthName} ${data?.year} Leaderboard | wemake` },
		{
			name: 'description',
			content: `Top products from ${monthName} ${data?.year}`,
		},
	];
};

export default function MonthlyLeaderboardPage({
	loaderData,
}: Route.ComponentProps) {
	const { year, month, topProducts } = loaderData;
	const monthName = new Date(
		Number(year),
		Number(month) - 1
	).toLocaleDateString('en-US', { month: 'long' });

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					{monthName} {year} Leaderboard
				</h1>
				<p className='text-xl text-muted-foreground'>
					Top products from {monthName} {year}
				</p>
			</div>

			<div className='space-y-4'>
				{/* Monthly leaderboard items will be rendered here */}
			</div>
		</div>
	);
}
