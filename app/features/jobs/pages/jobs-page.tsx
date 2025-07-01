import { Hero } from '~/common/components/hero';
import type { Route } from './+types/jobs-page';
import JobCard from '../components/job-card';
import { Button } from '~/common/components/ui/button';
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from '../constants';
import { useSearchParams } from 'react-router';
import { cn } from '~/lib/utils';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Jobs | wemake' },
		{ name: 'description', content: 'Find your next job opportunity' },
	];
};

export default function JobsPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const onFilterClick = (key: string, value: string) => {
		searchParams.set(key, value);
		setSearchParams(searchParams);
	};
	return (
		<div className='space-y-20'>
			<Hero title='Jobs' subtitle='Companies looking for makers' />
			<div className='grid grid-cols-6 gap-20 items-start'>
				<div className='grid grid-cols-3 col-span-4  gap-5'>
					{Array.from({ length: 9 }).map((_, index) => (
						<JobCard
							key={index}
							id={`job-${index}`}
							companyName='TechCorp'
							companyLogoUrl='https://github.com/github.png'
							postedAt='2 days ago'
							jobTitle='Senior Frontend Developer'
							type='Full-time'
							positionLocation='Remote'
							salary='$80k - $120k'
							companyHq='San Francisco, CA'
						/>
					))}
				</div>
				<div className='col-span-2 flex flex-col gap-10'>
					<div className='flex flex-col items-start gap-2.5'>
						<h4 className='text-sm font-bold text-muted-foreground'>Type</h4>
						<div className='flex flex-wrap gap-2'>
							{JOB_TYPES.map((type) => (
								<Button
									variant='outline'
									size='sm'
									onClick={() => onFilterClick('type', type.value)}
									className={cn(
										searchParams.get('type') === type.value ? 'bg-accent' : ''
									)}
								>
									{type.label}
								</Button>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start gap-2.5'>
						<h4 className='text-sm font-bold text-muted-foreground'>
							Location
						</h4>
						<div className='flex flex-wrap gap-2'>
							{LOCATION_TYPES.map((location) => (
								<Button
									variant='outline'
									size='sm'
									onClick={() => onFilterClick('location', location.value)}
									className={cn(
										searchParams.get('location') === location.value
											? 'bg-accent'
											: ''
									)}
								>
									{location.label}
								</Button>
							))}
						</div>
					</div>
					<div className='flex flex-col items-start gap-2.5'>
						<h4 className='text-sm font-bold text-muted-foreground'>
							Salary Range
						</h4>
						<div className='flex flex-wrap gap-2'>
							{SALARY_RANGE.map((salary) => (
								<Button
									variant='outline'
									size='sm'
									onClick={() => onFilterClick('salary', salary)}
									className={cn(
										searchParams.get('salary') === salary ? 'bg-accent' : ''
									)}
								>
									{salary}
								</Button>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
