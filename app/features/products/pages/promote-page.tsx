import { type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/promote-page';

export function loader({ request }: Route.LoaderArgs) {
	return {
		promotionPlans: [
			{
				id: 'basic',
				name: 'Basic Promotion',
				price: '$29',
				features: [
					'Featured for 1 day',
					'Social media post',
					'Newsletter mention',
				],
			},
			{
				id: 'premium',
				name: 'Premium Promotion',
				price: '$99',
				features: [
					'Featured for 1 week',
					'Multiple social posts',
					'Newsletter feature',
					'Homepage banner',
				],
			},
		],
	};
}

export function action({ request }: Route.ActionArgs) {
	// Handle promotion purchase here
	return {
		success: true,
		message: 'Promotion package purchased successfully!',
	};
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Promote Product | wemake' },
		{
			name: 'description',
			content: 'Boost your product visibility with our promotion packages',
		},
	];
};

export default function PromotePage({
	loaderData,
	actionData,
}: Route.ComponentProps) {
	const { promotionPlans } = loaderData;

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					Promote Your Product
				</h1>
				<p className='text-xl text-muted-foreground'>
					Boost your product visibility with our promotion packages
				</p>
			</div>

			{actionData?.success && (
				<div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
					<p className='text-green-800'>{actionData.message}</p>
				</div>
			)}

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{promotionPlans.map((plan) => (
					<div key={plan.id} className='border rounded-lg p-6'>
						<h3 className='text-2xl font-bold mb-2'>{plan.name}</h3>
						<p className='text-3xl font-bold text-primary mb-4'>{plan.price}</p>

						<ul className='space-y-2 mb-6'>
							{plan.features.map((feature, index) => (
								<li key={index} className='flex items-center'>
									<span className='mr-2'>✓</span>
									{feature}
								</li>
							))}
						</ul>

						<Button className='w-full'>Choose {plan.name}</Button>
					</div>
				))}
			</div>
		</div>
	);
}
