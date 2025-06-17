import { Link } from 'react-router';
import { Separator } from './ui/separator';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '~/lib/utils';

const menues = [
	{
		name: 'Products',
		to: '/products',
		items: [
			{
				name: 'Leaderboards',
				description: 'See the top performer in your community',
				to: '/products/leaderboard',
			},
			{
				name: 'Categories',
				description: 'See the top categories in your community',
				to: '/products/categories',
			},
			{
				name: 'Search',
				description: 'Search for a product',
				to: '/products/search',
			},
			{
				name: 'Submit a Product',
				description: 'Submit a product to our community',
				to: '/products/submit',
			},
			{
				name: 'Promote',
				description: 'Promote a product to our community',
				to: '/products/promote',
			},
		],
	},
	{
		name: 'Jobs',
		to: '/jobs',
		items: [
			{
				name: 'Remote Jobs',
				description: 'Find a remote job in our community',
				to: '/jobs?location=remote',
			},
			{
				name: 'Full-Time Jobs',
				description: 'Find a full-time job in our community',
				to: '/jobs?type=full-time',
			},
			{
				name: 'Freelance Jobs',
				description: 'Find a freelance job in our community',
				to: '/jobs?type=freelance',
			},
			{
				name: 'Internships',
				description: 'Find an internship in our community',
				to: '/jobs?type=internship',
			},
			{
				name: 'Submit a Job',
				description: 'Submit a job to our community',
				to: '/jobs/submit',
			},
		],
	},
	{
		name: 'Community',
		to: '/community',
		items: [
			{
				name: 'All Posts',
				description: 'See all posts in our community',
				to: '/community',
			},
			{
				name: 'Top Posts',
				description: 'See the top posts in our community',
				to: '/community?sort=top',
			},
			{
				name: 'New Posts',
				description: 'See the new posts in our community',
				to: '/community?sort=new',
			},
			{
				name: 'Create a Post',
				description: 'Create a post in our community',
				to: '/community/create',
			},
		],
	},
	{
		name: 'IdeasGPT',
		to: '/ideas',
	},
	{
		name: 'Teams',
		to: '/teams',
		items: [
			{
				name: 'All Teams',
				description: 'See all teams in our community',
				to: '/teams',
			},
			{
				name: 'Create a Team',
				description: 'Create a team in our community',
				to: '/teams/create',
			},
		],
	},
];
export default function Navigation() {
	return (
		<nav className='flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50'>
			<div className='flex items-center'>
				<Link to='/' className='font-bold tracking-tighter text-lg'>
					wemake
				</Link>
				<Separator orientation='vertical' className='min-h-6 mx-4' />
				<NavigationMenu>
					<NavigationMenuList>
						{menues.map((menu) => (
							<NavigationMenuItem key={menu.name}>
								{menu.items ? (
									<>
										<Link to={menu.to}>
											<NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
										</Link>
										<NavigationMenuContent>
											<ul className='grid w-[600px] font-light gap-3 p-4 grid-cols-2'>
												{menu.items?.map((item) => (
													<NavigationMenuItem
														className={cn(
															'select-none rounded-md transition-colors focus:bg-accent hover:bg-accent',
															item.to === '/products/promote' &&
																'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20',
															item.to === '/jobs/submit' &&
																'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20'
														)}
														key={item.name}
													>
														<NavigationMenuLink asChild>
															{/* asChild를 붙여주면 nagicationMenuLink의 스타일이 자식 Link에 적용된다. 해당 컴포넌트가 아닌 react router의 link를 사용하기 위해 사용*/}
															<Link
																className='p-3 space-y-1 block leading-none no-underline outline-none'
																to={item.to}
															>
																<span className='text-sm font-medium leading-none'>
																	{item.name}
																</span>
																<p className='text-sm text-muted-foreground leading-snug'>
																	{item.description}
																</p>
															</Link>
														</NavigationMenuLink>
													</NavigationMenuItem>
												))}
											</ul>
										</NavigationMenuContent>
									</>
								) : (
									<Link className={navigationMenuTriggerStyle()} to={menu.to}>
										{menu.name}
									</Link>
								)}
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</nav>
	);
}
