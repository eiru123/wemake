import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/leaderboard-page';
import { Hero } from '~/common/components/hero';
import { Link } from 'react-router';
import ProductCard from '../components/product-card';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Leaderboard | wemake' },
		{ name: 'description', content: 'Top products ranked by our community' },
	];
};

export default function LeaderboardPage() {
	return (
		<div className='space-y-20'>
			<Hero
				title='Leaderboard'
				subtitle='The most popular products on wemake'
			/>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-3xl font-bold leading-tight tracking-tight'>
						Daily Leaderboard
					</h2>
					<p className='text-xl font-light text-foreground'>
						The most popular products on wemake by day.
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
				<Button variant='link' asChild className='text-lg p-0 self-center'>
					<Link to='/products/leaderboards/daily'>
						Explore all porducts &rarr;
					</Link>
				</Button>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-3xl font-bold leading-tight tracking-tight'>
						Weekly Leaderboard
					</h2>
					<p className='text-xl font-light text-foreground'>
						The most popular products on wemake by week.
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
				<Button variant='link' asChild className='text-lg p-0 self-center'>
					<Link to='/products/leaderboards/weekly'>
						Explore all porducts &rarr;
					</Link>
				</Button>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-3xl font-bold leading-tight tracking-tight'>
						Monthly Leaderboard
					</h2>
					<p className='text-xl font-light text-foreground'>
						The most popular products on wemake by month.
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
				<Button variant='link' asChild className='text-lg p-0 self-center'>
					<Link to='/products/leaderboards/monthly'>
						Explore all porducts &rarr;
					</Link>
				</Button>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div>
					<h2 className='text-3xl font-bold leading-tight tracking-tight'>
						Yearly Leaderboard
					</h2>
					<p className='text-xl font-light text-foreground'>
						The most popular products on wemake by year.
					</p>
					<Button variant='link' asChild className='text-lg p-0'>
						<Link to='/products/leaderboards'>Explore all porducts &rarr;</Link>
					</Button>
				</div>
				{Array.from({ length: 7 }).map((_, index) => (
					<ProductCard
						id='prodcutId'
						name='Product Name'
						description='Product Description'
						commentsCount={12}
						viewsCount={12}
						votesCount={120}
					/>
				))}
				<Button variant='link' asChild className='text-lg p-0 self-center'>
					<Link to='/products/leaderboards/yearly'>
						Explore all porducts &rarr;
					</Link>
				</Button>
			</div>
		</div>
	);
}
