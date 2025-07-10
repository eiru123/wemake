import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '~/common/components/ui/breadcrumb';
import { Link, Form } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { ChevronUpIcon, DotIcon } from 'lucide-react';
import { Textarea } from '~/common/components/ui/textarea';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Reply } from '~/features/community/components/reply';

export function meta() {
	return [{ title: 'Post | Wemake' }];
}

export default function PostPage() {
	return (
		<div className='space-y-10'>
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to='/community'>Community</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to='/community?topic=productivity'>Productivity</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link to='/community/postId'>
								What is the best productivity tool?
							</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='grid grid-cols-6 items-start gap-40'>
				<div className='col-span-4 space-y-10'>
					<div className='flex w-full items-start gap-10'>
						<Button variant='outline' className='flex flex-col h-14'>
							<ChevronUpIcon className='w-4 h-4 shrink-0' />
							<span>10</span>
						</Button>
						<div className='space-y-20'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold'>
									What is the best productivity tool?
								</h2>
								<div className='flex items-center gap-22 text-sm text-muted-foreground'>
									<span>@nico</span>
									<DotIcon className='size-5' />
									<span>12 hours ago</span>
									<DotIcon className='size-5' />
									<span>10 replies</span>
								</div>
								<p className='text-muted-foreground w-2/3'>
									Hello, I am looking for a productivity tool that can help me
									manage my tasks and projects. Any recommendations? I have
									tried Notion, but it's not what i'm looking for. I dream of a
									tool that can help me manage my tasks and projects in a simple
									and efficient way.
								</p>
							</div>
							<Form className='flex flex-row items-start gap-5 w-3/4'>
								<Avatar className='size-14'>
									<AvatarFallback>N</AvatarFallback>
									<AvatarImage src='https://github.com/eiru123.png' />
								</Avatar>
								<div className='flex flex-col gap-5 items-end w-full'>
									<Textarea
										placeholder='Write a reply'
										className='w-full resize-none'
										rows={5}
									/>
									<Button>Reply</Button>
								</div>
							</Form>
							<div className='space-y-10'>
								<h4 className='font-semibold'>10 Replies</h4>
								<div className='flex flex-col gap-5'>
									<Reply
										username='nico'
										avatarUrl='https://github.com/eiru123.png'
										timestamp='12 hours ago'
										content="Hello, I am looking for a productivity tool that can help me manage my tasks and projects. Any recommendations? I have tried Notion, but it's not what i'm looking for. I dream of a tool that can help me manage my tasks and projects in a simple and efficient way."
										topLevel
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<aside className='col-span-2 space-y-5 border rounded-lg p-6 shadow-sm'>
					<div className='flex gap-5'>
						<Avatar className='size-14'>
							<AvatarFallback>N</AvatarFallback>
							<AvatarImage src='https://github.com/eiru123.png' />
						</Avatar>
						<div className='flex flex-col gap-2'>
							<h4 className='text-lg font-medium'>Nicolas</h4>
							<Badge variant='secondary'>Entrepreneur</Badge>
						</div>
					</div>
					<div className='gap-2 text-sm flex flex-col '>
						<span>🎂 Joined 3 months ago</span>
						<span>🚀 Launched 10 products</span>
					</div>
					<Button variant='outline' className='w-full'>
						Follow
					</Button>
				</aside>
			</div>
		</div>
	);
}
