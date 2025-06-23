import { type MetaFunction } from 'react-router';
import type { Route } from './+types/products-page';

export function loader({ request }: Route.LoaderArgs) {
	return {
		products: [],
		featuredProducts: [],
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Products | wemake' },
		{
			name: 'description',
			content: 'Discover amazing products from our community',
		},
	];
};

export default function ProductsPage() {
	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>Products</h1>
				<p className='text-xl text-muted-foreground'>
					Discover amazing products from our community
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Product cards will be rendered here */}
			</div>
		</div>
	);
}
