import { Form, Link, NavLink, Outlet } from 'react-router';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Button, buttonVariants } from '~/common/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '~/common/components/ui/dialog';
import { Textarea } from '~/common/components/ui/textarea';
import { cn } from '~/lib/utils';

export default function ProfileLayout() {
	return (
		<div className='space-y-10'>
			<div className='flex items-start gap-4'>
				<Avatar className='size-40'>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>N</AvatarFallback>
				</Avatar>
				<div className='space-y-5'>
					<div className='flex gap-2'>
						<h1 className='text-2xl font-bold'>John Doe</h1>
						<Button variant='outline' asChild>
							<Link to='/my/settings'>Edit profile</Link>
						</Button>
						<Button variant='secondary'>Follow</Button>
						<Dialog>
							<DialogTrigger asChild>
								<Button variant='outline'>Message</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Message</DialogTitle>
								</DialogHeader>
								<DialogDescription className='space-y-4'>
									<span className='text-sm text-muted-foreground'>
										Send a message to John Doe
									</span>
									<Form className='space-y-4'>
										<Textarea
											placeholder='Message'
											className='resize-none'
											rows={4}
										/>
										<Button type='submit' variant='secondary'>
											Send
										</Button>
									</Form>
								</DialogDescription>
							</DialogContent>
						</Dialog>
					</div>
					<div className='flex gap-2 items-center'>
						<span className='text-sm text-muted-foreground'>@john_doe</span>
						<Badge variant='secondary'>Product Designer</Badge>
						<Badge variant='secondary'>100 followers</Badge>
						<Badge variant='secondary'>100 following</Badge>
					</div>
				</div>
			</div>
			<div className='flex gap-5'>
				{[
					{ label: 'About', to: '/users/username' },
					{ label: 'Products', to: '/users/username/products' },
					{ label: 'Posts', to: '/users/username/posts' },
				].map((item) => (
					/**
					 * navLink는 to에 해당하는 url이 같으면 isActive가 true가 된다.
					 * 여기서는 /users/username이 모두 포함되므로 어떤걸 눌러도 About 버튼은 항상 불이 들어옴
					 */
					<NavLink
						end
						className={({ isActive }) =>
							cn([
								buttonVariants({ variant: 'outline' }),
								isActive && 'text-green-500',
							])
						}
						to={item.to}
					>
						{item.label}
					</NavLink>
				))}
			</div>
			<div className='max-w-screen-md'>
				<Outlet />
			</div>
		</div>
	);
}
