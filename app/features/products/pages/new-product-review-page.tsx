import { redirect } from 'react-router';
import type { Route } from './+types/new-product-review-page';
import { Card } from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';
import { Textarea } from '~/common/components/ui/textarea';

export function loader({ params }: Route.LoaderArgs) {
	const { productId } = params;

	// TODO: 실제 제품 데이터를 데이터베이스에서 가져오기
	// TODO: 사용자 인증 확인
	return {
		product: {
			id: productId,
			name: 'Sample Product',
		},
	};
}

export async function action({ request, params }: Route.ActionArgs) {
	const { productId } = params;
	const formData = await request.formData();

	const rating = formData.get('rating');
	const title = formData.get('title');
	const content = formData.get('content');

	// TODO: 리뷰 데이터 검증
	// TODO: 데이터베이스에 리뷰 저장

	console.log('새 리뷰:', { productId, rating, title, content });

	// 리뷰 저장 후 리뷰 페이지로 리다이렉트
	return redirect(`/products/${productId}/reviews`);
}

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Write Review' },
		{ name: 'description', content: 'Write a review' },
	];
};

interface NewProductReviewPageProps {
	loaderData: {
		product: {
			id: string;
			name: string;
		};
	};
}

export default function NewProductReviewPage({
	loaderData,
}: NewProductReviewPageProps) {
	const { product } = loaderData;

	return (
		<div className='container mx-auto py-8'>
			<div className='max-w-2xl mx-auto'>
				<div className='mb-6'>
					<h1 className='text-3xl font-bold mb-2'>{product.name} 리뷰 작성</h1>
					<p className='text-gray-600'>
						이 제품에 대한 솔직한 리뷰를 작성해주세요.
					</p>
				</div>

				<Card className='p-6'>
					<form method='post' className='space-y-6'>
						<div>
							<Label htmlFor='rating'>평점 *</Label>
							<div className='flex gap-1 mt-2'>
								{Array.from({ length: 5 }).map((_, i) => (
									<label key={i} className='cursor-pointer'>
										<input
											type='radio'
											name='rating'
											value={i + 1}
											className='sr-only peer'
											required
										/>
										<span className='text-2xl text-gray-300 peer-checked:text-yellow-500 hover:text-yellow-400'>
											★
										</span>
									</label>
								))}
							</div>
						</div>

						<div>
							<Label htmlFor='title'>제목 *</Label>
							<Input
								id='title'
								name='title'
								placeholder='리뷰 제목을 입력하세요'
								required
								className='mt-2'
							/>
						</div>

						<div>
							<Label htmlFor='content'>리뷰 내용 *</Label>
							<Textarea
								id='content'
								name='content'
								placeholder='제품에 대한 자세한 리뷰를 작성해주세요...'
								rows={6}
								required
								className='mt-2'
							/>
						</div>

						<div className='flex gap-3'>
							<Button type='submit'>리뷰 게시</Button>
							<Button
								type='button'
								variant='outline'
								onClick={() => window.history.back()}
							>
								취소
							</Button>
						</div>
					</form>
				</Card>

				<div className='mt-6 p-4 bg-blue-50 rounded-lg'>
					<h3 className='font-semibold text-blue-900 mb-2'>
						리뷰 작성 가이드라인
					</h3>
					<ul className='text-sm text-blue-800 space-y-1'>
						<li>• 실제 사용 경험을 바탕으로 작성해주세요</li>
						<li>• 다른 사용자에게 도움이 되는 구체적인 정보를 포함해주세요</li>
						<li>• 제품의 장점과 단점을 균형있게 작성해주세요</li>
						<li>• 비속어나 부적절한 내용은 삼가해주세요</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
