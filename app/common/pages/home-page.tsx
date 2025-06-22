import { Link, type MetaFunction } from 'react-router';
import ProductCard from '~/features/products/components/product-card';
import PostCard from '~/features/community/components/post-card';
import IdeaCard from '~/features/ideas/components/idea-card';
import JobCard from '~/features/jobs/components/job-card';
import { Button } from '../components/ui/button';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Home | wemake' },
		{ name: 'description', content: 'Welcome to wemake' },
	];
};

export default function HomePage() {
	return (
		<div className='px-20 space-y-40'>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-5xl font-bold leading-tight tracking-tight'>
						Today's Products
					</h2>
					<p className='text-xl font-light text-foreground'>
						The best products made by our community today.
					</p>
					<Button variant='link' asChild className='text-lg p-0'>
						<Link to='/products/leaderboards'>Explore all porducts &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }).map((_, index) => (
					<ProductCard
						id='prodcutId'
						name='Product Name'
						description='Product Description'
						commentsCount={12}
						viewsCount={12}
						votesCount={120}
					/>
				))}
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-5xl font-bold leading-tight tracking-tight'>
						Latest Discussions
					</h2>
					<p className='text-xl font-light text-foreground'>
						The latest discussions from our community.
					</p>
					<Button variant='link' asChild className='text-lg p-0'>
						<Link to='/community'>Explore all discussions &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }).map((_, index) => (
					<PostCard
						id={`postId-${index}`}
						title='What is the best productivity tool?'
						author='Nico'
						authorAvatarUrl='https://github.com/apple.png'
						category='productivity'
						postedAt='12 hours ago'
						avatarFallback='N'
					/>
				))}
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-5xl font-bold leading-tight tracking-tight'>
						IdeasGPT
					</h2>
					<p className='text-xl font-light text-foreground'>
						find ideas for your next project
					</p>
					<Button variant='link' asChild className='text-lg p-0'>
						<Link to='/community'>Explore all ideas &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }).map((_, index) => (
					<IdeaCard
						id={`ideaId-${index}`}
						title='A startup that create an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress. using a mobile app to track workouts and progress as well as website to manage the business'
						viewsCount={123}
						likesCount={12}
						postedAt='12 hours ago'
						claimed={index % 2 === 0}
					/>
				))}
			</div>
			<div className='grid grid-cols-4 gap-4'>
				<div>
					<h2 className='text-5xl font-bold leading-tight tracking-tight'>
						Latest Jobs
					</h2>
					<p className='text-xl font-light text-foreground'>
						Find your dream job
					</p>
					<Button variant='link' asChild className='text-lg p-0'>
						<Link to='/jobs'>Explore all jobs &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 10 }).map((_, index) => (
					<JobCard
						id={`jobId-${index}`}
						companyName='Tesla'
						companyLogoUrl='https://github.com/facebook.png'
						postedAt='12 hours ago'
						jobTitle='Software Engineer'
						type='Full-time'
						positionLocation='Remote'
						salary='$100,000 - $120,000'
						companyHq='San Francisco, CA'
					/>
				))}
			</div>
		</div>
	);
}
