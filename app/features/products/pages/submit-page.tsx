import { type MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/submit-page';

export function loader({ request }: Route.LoaderArgs) {
	return {
		categories: [
			'productivity',
			'design',
			'developer-tools',
			'marketing',
			'finance',
		],
	};
}

export function action({ request }: Route.ActionArgs) {
	// Handle form submission here
	return { success: true, message: 'Product submitted successfully!' };
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Submit Product | wemake' },
		{ name: 'description', content: 'Submit your product to our community' },
	];
};

export default function SubmitPage() {
	const actionData = null;

	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>Submit Product</h1>
				<p className='text-xl text-muted-foreground'>
					Share your amazing product with our community
				</p>
			</div>

			{actionData?.success && (
				<div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
					<p className='text-green-800'>{actionData.message}</p>
				</div>
			)}

			<div className='max-w-2xl'>
				<form method='post' className='space-y-6'>
					{/* Form fields will be here */}
					<div>
						<label className='block text-sm font-medium mb-2'>
							Product Name
						</label>
						<input
							type='text'
							name='name'
							required
							className='w-full px-3 py-2 border border-gray-300 rounded-md'
						/>
					</div>

					<div>
						<label className='block text-sm font-medium mb-2'>
							Description
						</label>
						<textarea
							name='description'
							required
							rows={4}
							className='w-full px-3 py-2 border border-gray-300 rounded-md'
						/>
					</div>

					<Button type='submit'>Submit Product</Button>
				</form>
			</div>
		</div>
	);
}
