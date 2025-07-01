import { DotIcon } from 'lucide-react';
import type { Route } from './+types/job-page';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = ({ params }) => {
	return [
		{ title: `Job ${params.jobId} | wemake` },
		{ name: 'description', content: 'View job details and apply' },
	];
};

export default function JobPage() {
	return (
		<div>
			<div className='bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg'></div>
			<div className='grid grid-cols-6 gap-20 items-start -mt-20'>
				<div className='col-span-4 space-y-10'>
					<div>
						<div className='size-40 bg-white rounded-full border-white overflow-hidden relative left-10'>
							<img
								src='https://github.com/facebook.png'
								alt='company logo'
								className='object-cover'
							/>
						</div>
						<h1 className='text-4xl font-bold'>Senior Engineer</h1>
						<h4 className='text-lg text-muted-foreground'>Meta Inc.</h4>
					</div>
					<div className='flex gap-2'>
						<Badge variant='secondary'>Full-time</Badge>
						<Badge variant='secondary'>Remote</Badge>
					</div>
					<div className='space-y-2.5'>
						<h4 className='text-2xl font-bold'>Overview</h4>
						<p className='text-lg'>
							This is a full-time remote position for a Software Engineer. We
							are looking for a skilled and experienced Software Engineer to
							join our team.
						</p>
					</div>
					<div className='space-y-2.5'>
						<h4 className='text-2xl font-bold'>Responsibilities</h4>
						<ul className='list-disc text-lg list-inside'>
							{[
								'Design and implement scalable and efficient software solutions',
								'Collaborate with cross-functional teams to deliver high-quality products',
								'Optimize software performance and maintainability',
								'Stay up-to-date with emerging technologies and best practices',
							].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div className='space-y-2.5'>
						<h4 className='text-2xl font-bold'>Qualifications</h4>
						<ul className='list-disc text-lg list-inside'>
							{[
								"Bachelor's degree in Computer Science or a related field",
								'5+ years of experience in software development',
								'Strong understanding of software development best practices',
								'Experience with modern web development frameworks and tools',
							].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div className='space-y-2.5'>
						<h4 className='text-2xl font-bold'>Benefits</h4>
						<ul className='list-disc text-lg list-inside'>
							{[
								'Health insurance',
								'Dental insurance',
								'Vision insurance',
								'401(k) retirement plan',
								'Paid time off',
								'Remote work',
								'Flexible hours',
								'Professional development opportunities',
								'Collaborative team environment',
								'Opportunity to work on cutting-edge projects',
							].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div className='space-y-2.5'>
						<h4 className='text-2xl font-bold'>Skills</h4>
						<ul className='list-disc text-lg list-inside'>
							{[
								'JavaScript',
								'TypeScript',
								'React',
								'Node.js',
								'Next.js',
								'Tailwind CSS',
								'Git',
								'Docker',
								'Kubernetes',
							].map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
				<div className='col-span-2 sticky top-20 border rounded-lg mt-32 p-6 space-y-5'>
					<div className='flex flex-col'>
						<span className='text-sm text-muted-foreground'>Avg. salary</span>
						<span className='text-2xl font-medium'>$100,000 - $120,000</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-sm text-muted-foreground'>Location</span>
						<span className='text-2xl font-medium'>Remote</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-sm text-muted-foreground'>Type</span>
						<span className='text-2xl font-medium'>Full-time</span>
					</div>
					<div className='flex'>
						<span className='text-sm text-muted-foreground'>
							Posted 2 days ago
						</span>
						<DotIcon className='size-4' />
						<span className='text-sm text-muted-foreground'>395 views</span>
					</div>
					<Button className='w-full'>Apply Now</Button>
				</div>
			</div>
		</div>
	);
}
