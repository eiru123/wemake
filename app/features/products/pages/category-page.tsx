import { type MetaFunction } from 'react-router';
import type { Route } from './+types/category-page';

export function loader({ request, params }: Route.LoaderArgs) {
	const category = params.category;

	return {
		category,
		products: [],
		totalProducts: 0,
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const categoryName =
		data?.category?.charAt(0).toUpperCase() + data?.category?.slice(1);

	return [
		{ title: `${categoryName} | wemake` },
		{
			name: 'description',
			content: `Discover ${categoryName.toLowerCase()} products from our community`,
		},
	];
};

export default function CategoryPage() {
	const category = 'productivity';
	const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1);

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>{categoryName}</h1>
				<p className='text-xl text-muted-foreground'>
					Discover {categoryName.toLowerCase()} products from our community
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Category products will be rendered here */}
			</div>
		</div>
	);
}
