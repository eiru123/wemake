import { Link } from 'react-router';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from '~/common/components/ui/card';
import { ChevronRightIcon } from 'lucide-react';

interface CategoryCardProps {
	id: string;
	name: string;
	description: string;
}

export default function CategoryCard({
	id,
	name,
	description,
}: CategoryCardProps) {
	return (
		<Link to={`/products/categories/${id}`} className='block'>
			<Card>
				<CardHeader>
					<CardTitle className='flex items-center'>
						{name} <ChevronRightIcon className='size-6' />
					</CardTitle>
					<CardDescription className='text-base'>{description}</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
}
