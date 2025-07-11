import ProductCard from '~/features/products/components/product-card';

export function meta() {
	return [{ title: 'Profile Products | Wemake' }];
}

export default function ProfileProductsPage() {
	return (
		<div className='flex flex-col gap-5'>
			{Array.from({ length: 5 }).map((_, index) => (
				<ProductCard
					id='prodcutId'
					name='Product Name'
					description='Product Description'
					commentsCount={12}
					viewsCount={12}
					votesCount={120}
				/>
			))}
		</div>
	);
}
