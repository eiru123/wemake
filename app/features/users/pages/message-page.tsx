import { SendIcon } from 'lucide-react';
import { Form } from 'react-router';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Textarea } from '~/common/components/ui/textarea';
import { MessageBubble } from '~/features/users/components/message-bubble';

export function meta() {
	return [{ title: 'Message | Wemake' }];
}

export default function MessagePage() {
	return (
		<div className='h-full flex flex-col justify-between'>
			<Card>
				<CardHeader className='flex flex-row items-center gap-4'>
					<Avatar className='size-14'>
						<AvatarImage src='https://github.com/stevejobs.png' />
						<AvatarFallback>S</AvatarFallback>
					</Avatar>
					<div className='flex flex-col gap-1'>
						<CardTitle>Steve Jobs</CardTitle>
						<CardDescription>2 days ago</CardDescription>
					</div>
				</CardHeader>
			</Card>
			<div className='py-10 overflow-y-scroll flex flex-col justify-start h-full'>
				{Array.from({ length: 20 }).map((_, index) => (
					<MessageBubble
						key={index}
						avatarUrl='https://github.com/stevejobs.png'
						avatarFallback='S'
						content={`this is a message from steve jobs in iheaven, make sure to reply because if you don/t, you will be punisehd ${index}`}
						isCurrentUser={index % 2 === 0}
					/>
				))}
			</div>
			<Card>
				<CardHeader>
					{/* flex는 absolute인 요소의 위치도 조정할 수 있다 */}
					<Form className='relative flex justify-end items-center'>
						<Textarea
							placeholder='Write a message...'
							rows={2}
							className='resize-none'
						/>
						<Button type='submit' size='icon' className='absolute right-2'>
							<SendIcon className='size-4' />
						</Button>
					</Form>
				</CardHeader>
			</Card>
		</div>
	);
}
