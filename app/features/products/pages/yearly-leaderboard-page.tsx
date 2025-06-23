import { type MetaFunction } from 'react-router';
import type { Route } from './+types/yearly-leaderboard-page';

export function loader({ request, params }: Route.LoaderArgs) {
	const year = params.year;

	return {
		year,
		topProducts: [],
		totalProducts: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{ title: `${data?.year} Leaderboard | wemake` },
		{ name: 'description', content: `Top products from ${data?.year}` },
	];
};

export default function YearlyLeaderboardPage({
	loaderData,
}: Route.ComponentProps) {
	const { year, topProducts } = loaderData;

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					{year} Leaderboard
				</h1>
				<p className='text-xl text-muted-foreground'>
					Top products from {year}
				</p>
			</div>

			<div className='space-y-4'>
				{/* Yearly leaderboard items will be rendered here */}
			</div>
		</div>
	);
}
