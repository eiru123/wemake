import { Hero } from '~/common/components/hero';
import type { Route } from './+types/category-page';
import ProductCard from '../components/product-card';
import ProductPagination from '~/common/components/product-pagination';

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
	return [
		{ title: `Developer Tools | wemake` },
		{
			name: 'description',
			content: `Browse Developer Tools products`,
		},
	];
};

export default function CategoryPage() {
	return (
		<div className='space-y-10'>
			<Hero
				title={'Developer Tools'}
				subtitle={`Tools for developers to build products faster`}
			/>
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
