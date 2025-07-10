import { Form, Link } from 'react-router';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { MessageCircleIcon } from 'lucide-react';
import { DotIcon } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from '~/common/components/ui/textarea';

interface ReplyProps {
	username: string;
	avatarUrl?: string;
	timestamp: string;
	content: string;
	topLevel: boolean;
}

const getInitials = (name: string) => {
	return name
		.split(' ')
		.map((word) => word.charAt(0))
		.join('')
		.toUpperCase();
};

export function Reply({
	username,
	avatarUrl,
	timestamp,
	content,
	topLevel,
}: ReplyProps) {
	const [replying, setReplying] = useState(false);
	const toggleReplying = () => setReplying((prev) => !prev);

	return (
		<div className='flex flex-col gap-2'>
			<div className='flex items-start gap-5 w-2/3'>
				<Avatar className='size-14'>
					<AvatarFallback>{getInitials(username)}</AvatarFallback>
					{avatarUrl && <AvatarImage src={avatarUrl} />}
				</Avatar>
				<div className='flex flex-col gap-4 items-start'>
					<div className='flex items-center gap-2'>
						<Link to={`/users/@${username}`}>
							<h4 className='font-medium'>{username}</h4>
						</Link>
						<DotIcon className='size-5' />
						<span className='text-xs text-muted-foreground'>{timestamp}</span>
					</div>
					<p className='text-sm text-muted-foreground'>{content}</p>
					<Button variant='ghost' className='self-end' onClick={toggleReplying}>
						<MessageCircleIcon className='size-4' />
						Reply
					</Button>
				</div>
			</div>
			{replying && (
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
			)}
			{topLevel && (
				<div className='pl-20 w-full'>
					<Reply
						username='nico'
						avatarUrl='https://github.com/eiru123.png'
						timestamp='12 hours ago'
						content="Hello, I am looking for a productivity tool that can help me manage my tasks and projects. Any recommendations? I have tried Notion, but it's not what i'm looking for. I dream of a tool that can help me manage my tasks and projects in a simple and efficient way."
						topLevel={false}
					/>
				</div>
			)}
		</div>
	);
}
