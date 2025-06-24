import type { Route } from './+types/product-reviews-page';
import { Card } from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';

export function loader({ params }: Route.LoaderArgs) {
	const { productId } = params;

	// TODO: 실제 리뷰 데이터를 데이터베이스에서 가져오기
	return {
		product: {
			id: productId,
			name: 'Sample Product',
		},
		reviews: [
			{
				id: '1',
				user: {
					id: 'user1',
					name: '김철수',
					avatar: '/avatars/user1.jpg',
				},
				rating: 5,
				title: '정말 훌륭한 제품입니다!',
				content: '사용해보니 정말 만족스럽습니다. 추천합니다.',
				createdAt: '2024-01-15',
				likes: 12,
			},
			{
				id: '2',
				user: {
					id: 'user2',
					name: '이영희',
					avatar: '/avatars/user2.jpg',
				},
				rating: 4,
				title: '좋은 제품이지만 개선점이 있어요',
				content: '전반적으로 좋지만 UI가 조금 더 직관적이면 좋겠습니다.',
				createdAt: '2024-01-10',
				likes: 8,
			},
		],
	};
}

export function action({ request }: Route.ActionArgs) {
	return {};
}

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Product Reviews' },
		{ name: 'description', content: 'Product reviews' },
	];
};

interface ProductReviewsPageProps {
	loaderData: {
		product: {
			id: string;
			name: string;
		};
		reviews: Array<{
			id: string;
			user: {
				id: string;
				name: string;
				avatar: string;
			};
			rating: number;
			title: string;
			content: string;
			createdAt: string;
			likes: number;
		}>;
	};
}

export default function ProductReviewsPage({
	loaderData,
}: ProductReviewsPageProps) {
	const { product, reviews } = loaderData;

	return (
		<div className='container mx-auto py-8'>
			<div className='max-w-4xl mx-auto'>
				<div className='flex justify-between items-center mb-6'>
					<div>
						<h1 className='text-3xl font-bold mb-2'>{product.name} 리뷰</h1>
						<p className='text-gray-600'>{reviews.length}개의 리뷰</p>
					</div>
					<Button asChild>
						<a href={`/products/${product.id}/reviews/new`}>리뷰 작성하기</a>
					</Button>
				</div>

				<div className='space-y-6'>
					{reviews.map((review) => (
						<Card key={review.id} className='p-6'>
							<div className='flex items-start gap-4'>
								<div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
									<span className='text-sm font-medium'>
										{review.user.name.charAt(0)}
									</span>
								</div>

								<div className='flex-1'>
									<div className='flex items-center gap-3 mb-2'>
										<h3 className='font-semibold'>{review.user.name}</h3>
										<div className='flex items-center gap-1'>
											{Array.from({ length: 5 }).map((_, i) => (
												<span
													key={i}
													className={`text-sm ${
														i < review.rating
															? 'text-yellow-500'
															: 'text-gray-300'
													}`}
												>
													★
												</span>
											))}
										</div>
										<span className='text-sm text-gray-500'>
											{review.createdAt}
										</span>
									</div>

									<h4 className='font-medium mb-2'>{review.title}</h4>
									<p className='text-gray-700 mb-3'>{review.content}</p>

									<div className='flex items-center gap-4'>
										<Button variant='ghost' size='sm'>
											👍 {review.likes}
										</Button>
										<Button variant='ghost' size='sm'>
											답글
										</Button>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>

				{reviews.length === 0 && (
					<Card className='p-8 text-center'>
						<p className='text-gray-500 mb-4'>아직 리뷰가 없습니다.</p>
						<Button asChild>
							<a href={`/products/${product.id}/reviews/new`}>
								첫 번째 리뷰를 작성해보세요
							</a>
						</Button>
					</Card>
				)}
			</div>
		</div>
	);
}
