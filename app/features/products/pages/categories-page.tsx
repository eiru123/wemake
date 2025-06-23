import { type MetaFunction } from 'react-router';
import type { Route } from './+types/categories-page';

export function loader({ request }: Route.LoaderArgs) {
	return {
		categories: [
			{ id: 'productivity', name: 'Productivity', count: 42 },
			{ id: 'design', name: 'Design', count: 28 },
			{ id: 'developer-tools', name: 'Developer Tools', count: 35 },
			{ id: 'marketing', name: 'Marketing', count: 19 },
			{ id: 'finance', name: 'Finance', count: 23 },
		],
	};
}

export function action({ request }: Route.ActionArgs) {
	return { success: true };
}

export const meta: MetaFunction = () => {
	return [
		{ title: 'Categories | wemake' },
		{ name: 'description', content: 'Browse products by category' },
	];
};

export default function CategoriesPage() {
	return (
		<div className='px-20'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>Categories</h1>
				<p className='text-xl text-muted-foreground'>
					Browse products by category
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Category cards will be rendered here */}
			</div>
		</div>
	);
}
