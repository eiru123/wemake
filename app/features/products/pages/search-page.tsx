import { data, Form } from 'react-router';
import type { Route } from './+types/search-page';
import { z } from 'zod';
import { Hero } from '~/common/components/hero';
import ProductCard from '../components/product-card';
import ProductPagination from '~/common/components/product-pagination';
import { Input } from '~/common/components/ui/input';
import { Button } from '~/common/components/ui/button';

const paramsSchema = z.object({
	query: z.string().optional().default(''),
	page: z.coerce.number().optional().default(1),
});

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Search Products | wemake' },
		{ name: 'description', content: 'Search for products' },
	];
};

export function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);

	const { success, data: parsedData } = paramsSchema.safeParse(
		Object.fromEntries(url.searchParams)
	);
	if (!success) {
		throw new Error('Invalid params');
	}
	return parsedData;
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export default function SearchPage() {
	return (
		<div className='space-y-10'>
			<Hero
				title='Search'
				subtitle='Search for Products by title or description'
			/>
			<Form className='flex justify-center max-w-screen-sm items-center mx-auto gap-2'>
				<Input
					name='query'
					placeholder='Search for products'
					className='text-lg'
				/>
				<Button type='submit'>Search</Button>
			</Form>
			<div className='space-y-10 w-full max-w-screen-md mx-auto'>
				{Array.from({ length: 11 }).map((_, index) => (
					<ProductCard
						id='prodcutId'
						name='Product Name'
						description='Product Description'
						commentsCount={12}
						viewsCount={12}
						votesCount={120}
					/>
				))}
				<ProductPagination totalPages={10} />
			</div>
		</div>
	);
}
