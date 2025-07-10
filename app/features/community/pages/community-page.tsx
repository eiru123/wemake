import {
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '~/common/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { Link, useSearchParams, Form } from 'react-router';
import { Hero } from '~/common/components/hero';
import { Button } from '~/common/components/ui/button';
import { DropdownMenu } from '~/common/components/ui/dropdown-menu';
import { PERIOD_OPTIONS, SORT_OPTIONS } from '../constants';
import { Input } from '~/common/components/ui/input';
import PostCard from '../components/post-card';

export function meta() {
	return [{ title: 'Community | Wemake' }];
}

export default function CommunityPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const sorting = searchParams.get('sorting') || 'newest';
	const period = searchParams.get('period') || 'all';
	return (
		<div>
			<Hero
				title='Community'
				subtitle='Ask questions, share ideas, and connect with other developers'
			/>
			<div className='grid grid-cols-6 items-start gap-40'>
				<div className='col-span-4 space-y-10'>
					<div className='flex justify-between'>
						<div className='space-y-5 w-full'>
							<div className='flex items-center gap-5'>
								<DropdownMenu>
									<DropdownMenuTrigger className='flex items-center gap-1'>
										<span className='text-sm capitalize'>{sorting}</span>
										<ChevronDownIcon className='w-4 h-4' />
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										{SORT_OPTIONS.map((option) => (
											<DropdownMenuCheckboxItem
												className='capitalize cursor-pointer'
												key={option}
												onCheckedChange={(checked: boolean) => {
													if (checked) {
														searchParams.set('sorting', option);
														setSearchParams(searchParams);
													}
												}}
											>
												{option}
											</DropdownMenuCheckboxItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
								{sorting === 'popular' && (
									<DropdownMenu>
										<DropdownMenuTrigger className='flex items-center gap-1'>
											<span className='text-sm capitalize'>{period}</span>
											<ChevronDownIcon className='w-4 h-4' />
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											{PERIOD_OPTIONS.map((option) => (
												<DropdownMenuCheckboxItem
													className='capitalize cursor-pointer'
													key={option}
													onCheckedChange={(checked: boolean) => {
														if (checked) {
															searchParams.set('period', option);
															setSearchParams(searchParams);
														}
													}}
												>
													{option}
												</DropdownMenuCheckboxItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								)}
							</div>
							<Form className='w-2/3'>
								<Input
									type='text'
									name='search'
									placeholder='Search for discussions'
								/>
							</Form>
						</div>
						<Button asChild>
							<Link to='/community/submit'>CreateDiscussion</Link>
						</Button>
					</div>
					<div className='space-y-5'>
						{Array.from({ length: 10 }).map((_, index) => (
							<PostCard
								id={`postId-${index}`}
								title='What is the best productivity tool?'
								author='Nico'
								authorAvatarUrl='https://github.com/apple.png'
								category='productivity'
								postedAt='12 hours ago'
								avatarFallback='N'
								expanded
							/>
						))}
					</div>
				</div>
				<aside className='col-span-2 space-y-4'>
					<span className='block text-sm font-bold text-muted-foreground'>
						Topics
					</span>
					<div className='flex flex-col gap-4 items-start'>
						{[
							'AI Tools',
							'Design Tools',
							'Dev Tools',
							'Note Taking Apps',
							'Productivity Tools',
						].map((category) => (
							<Button variant='link' asChild className='pl-0'>
								<Link
									key={category}
									to={`/community?topic=${category}`}
									className='font-semibold'
								>
									{category}
								</Link>
							</Button>
						))}
					</div>
				</aside>
			</div>
		</div>
	);
}
