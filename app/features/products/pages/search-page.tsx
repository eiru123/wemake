import { type MetaFunction } from 'react-router';
import type { Route } from './+types/search-page';

export function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const query = url.searchParams.get('q') || '';

	return {
		query,
		results: [],
		totalResults: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const query = data?.query;
	const title = query ? `Search: ${query} | wemake` : 'Search | wemake';

	return [
		{ title },
		{ name: 'description', content: 'Search for products in our community' },
	];
};

export default function SearchPage() {
	const query = '';
	const results = [];

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>Search</h1>
				<p className='text-xl text-muted-foreground'>
					Find the perfect product for your needs
				</p>
			</div>

			<div className='mb-8'>{/* Search input will be here */}</div>

			{query && (
				<div className='mb-4'>
					<p className='text-lg'>Results for "{query}"</p>
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Search results will be rendered here */}
			</div>
		</div>
	);
}
