import { Hero } from '~/common/components/hero';
import type { Route } from './+types/job-page';
import { Button } from '~/common/components/ui/button';
import { Badge } from '~/common/components/ui/badge';

export const meta: Route.MetaFunction = ({ params }) => {
	return [
		{ title: `Job ${params.jobId} | wemake` },
		{ name: 'description', content: 'View job details and apply' },
	];
};

export default function JobPage() {
	return (
		<div>
			<Hero title='Senior Frontend Developer' />
			<div className='max-w-screen-lg mx-auto space-y-10'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<img
							src='https://github.com/github.png'
							alt='Company logo'
							className='size-16 rounded-full'
						/>
						<div>
							<h2 className='text-2xl font-semibold'>TechCorp</h2>
							<p className='text-muted-foreground'>San Francisco, CA</p>
						</div>
					</div>
					<Button size='lg'>Apply Now</Button>
				</div>

				<div className='flex flex-wrap gap-2'>
					<Badge variant='default'>Full-time</Badge>
					<Badge variant='outline'>Remote</Badge>
					<Badge variant='outline'>$80k - $120k</Badge>
				</div>

				<div className='prose prose-neutral dark:prose-invert max-w-none'>
					<h3>Job Description</h3>
					<p>
						We are looking for a talented Senior Frontend Developer to join our
						growing team. You will be responsible for building and maintaining
						our web applications using modern technologies.
					</p>

					<h3>Requirements</h3>
					<ul>
						<li>5+ years of experience with React</li>
						<li>Strong TypeScript skills</li>
						<li>Experience with modern CSS frameworks</li>
						<li>Knowledge of web performance optimization</li>
					</ul>

					<h3>Benefits</h3>
					<ul>
						<li>Competitive salary</li>
						<li>Health insurance</li>
						<li>Remote work flexibility</li>
						<li>Professional development budget</li>
					</ul>
				</div>

				<div className='text-center'>
					<Button size='lg' className='min-w-48'>
						Apply for this position
					</Button>
				</div>
			</div>
		</div>
	);
}
