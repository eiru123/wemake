import { type MetaFunction } from 'react-router';
import type { Route } from './+types/daily-leaderboard-page';

export function loader({ request, params }: Route.LoaderArgs) {
	const { year, month, day } = params;

	return {
		year,
		month,
		day,
		topProducts: [],
		totalProducts: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const date = new Date(
		Number(data?.year),
		Number(data?.month) - 1,
		Number(data?.day)
	);
	const formattedDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return [
		{ title: `${formattedDate} Leaderboard | wemake` },
		{ name: 'description', content: `Top products from ${formattedDate}` },
	];
};

export default function DailyLeaderboardPage({
	loaderData,
}: Route.ComponentProps) {
	const { year, month, day, topProducts } = loaderData;
	const date = new Date(Number(year), Number(month) - 1, Number(day));
	const formattedDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					{formattedDate} Leaderboard
				</h1>
				<p className='text-xl text-muted-foreground'>
					Top products from {formattedDate}
				</p>
			</div>

			<div className='space-y-4'>
				{/* Daily leaderboard items will be rendered here */}
			</div>
		</div>
	);
}
