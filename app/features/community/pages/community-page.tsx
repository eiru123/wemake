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
import { getPosts, getTopics } from '../queries';
import type { Route } from './+types/community-page';

export function meta() {
	return [{ title: 'Community | Wemake' }];
}

// backend에서 실행
// 로딩이 오래걸리면 사용자는 화면을 보지 못함.
// export const loader = async () => {
// 	// await new Promise((resolve) => setTimeout(resolve, 10000));
// 	// const topics = await getTopics();
// 	// const posts = await getPosts();
// 	// const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
// 	// await 없이 내보낸다.
// 	// frontend 코드에서 Await 컴포넌트에 전달
// 	const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
// 	return { topics, posts };
// };

// 서버에서 실행되는게 아니고 브라우저에서 실행됨
export const loader = async () => {
	//cliendLoader가 받는다.
	const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
	return { topics, posts };
};
/**
 * loader 안에 있는 function에서 error를 throw하면 ErrorBoundary에서 처리됨.
 * 기본적으로 root에 ErrorBoundary가 있음.
 * 페이지 마다 ErrorBoundary를 만들 수 있음.
 */
export const clientLoader = async ({
	serverLoader,
}: Route.ClientLoaderArgs) => {
	// localStorage 접근 가능
	const serverData = await serverLoader();
	console.log(serverData);
	// await new Promise((resolve) => setTimeout(resolve, 10000));
	// const topics = await getTopics();
	// const posts = await getPosts();
	// const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
	// await 없이 내보낸다.
	// frontend 코드에서 Await 컴포넌트에 전달
	const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
	return { topics, posts };
};

// ui 오류에 신경쓸 필요없음. 에러나 로딩에 신경 쓸 필요 없음.
export default function CommunityPage({ loaderData }: Route.ComponentProps) {
	const { topics, posts } = loaderData;
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
						{posts.map((post) => (
							<PostCard
								key={post.post_id}
								id={post.post_id}
								title={post.title}
								author={post.author}
								authorAvatarUrl={post.author_avatar}
								category={post.topic}
								postedAt={post.created_at}
								avatarFallback='A'
								votesCount={post.upvotes}
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
						{topics.map((topic) => (
							<Button variant='link' asChild className='pl-0'>
								<Link
									key={topic.slug}
									to={`/community?topic=${topic.slug}`}
									className='font-semibold'
								>
									{topic.name}
								</Link>
							</Button>
						))}
					</div>
				</aside>
			</div>
		</div>
	);
}

// client loader에서 반환한 데이터를 화면에 표시하기 전에 표시할 컴포넌트
// 로딩 상태 표시해주는 뷰
// error는 ErrorBoundary에서 처리
export function HydrateFallback() {
	return <div>Loading...</div>;
}
