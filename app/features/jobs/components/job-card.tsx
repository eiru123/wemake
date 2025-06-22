import { Link } from 'react-router';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { Badge } from '~/common/components/ui/badge';

interface JobCardProps {
	id: string;
	companyName: string;
	companyLogoUrl: string;
	postedAt: string;
	jobTitle: string;
	type: string;
	positionLocation: string;
	salary: string;
	companyHq: string;
}

export default function JobCard({
	id,
	companyName,
	companyLogoUrl,
	postedAt,
	jobTitle,
	type,
	salary,
	positionLocation,
	companyHq,
}: JobCardProps) {
	return (
		<Link to={`/jobs/${id}`}>
			<Card className='bg-transparent hover:bg-card/50 transition-colors'>
				<CardHeader>
					<div className='flex items-center gap-4 mb-4'>
						<img
							src={companyLogoUrl}
							alt={`${companyName} logo`}
							className='size-10 rounded-full'
						/>
						<div className='space-x-2'>
							<span className='text-accent-foreground'>{companyName}</span>
							<span className='text-xs text-muted-foreground'>{postedAt}</span>
						</div>
					</div>
					<CardTitle>{jobTitle}</CardTitle>
				</CardHeader>
				<CardContent>
					<Badge variant='outline'>{type}</Badge>
					<Badge variant='outline'>{positionLocation}</Badge>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<div className='flex flex-col'>
						<span className='text-sm font-medium text-muted-foreground'>
							{salary}
						</span>
						<span className='text-sm font-medium text-muted-foreground'>
							{companyHq}
						</span>
					</div>
					<Button variant='secondary' size='sm'>
						Apply now
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
