import { MessageCircle, MessageCircleIcon } from 'lucide-react';

export function meta() {
	return [{ title: 'Messages | Wemake' }];
}

export default function MessagesPage() {
	return (
		<div className='h-full flex flex-col items-center justify-center gap-4 w-full'>
			<MessageCircleIcon className='size-12 text-muted-foreground' />
			<h1 className='text-xl font-semibold text-muted-foreground'>
				Click on a message in the sidebar to view it.
			</h1>
		</div>
	);
}
