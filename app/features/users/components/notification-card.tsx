import { EyeIcon } from 'lucide-react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { cn } from '~/lib/utils';

interface NotificationCardProps {
	userName: string;
	avatarUrl: string;
	avatarFallback: string;
	message: string;
	timestamp: string;
	seen: boolean;
}

export function NotificationCard({
	userName,
	avatarUrl,
	avatarFallback,
	message,
	timestamp,
	seen,
}: NotificationCardProps) {
	const getFallback = () => {
		if (avatarFallback) return avatarFallback;
		return userName.charAt(0).toUpperCase();
	};

	return (
		<Card className={cn('min-w-[450px]', seen ? '' : 'bg-yellow-500/60')}>
			<CardHeader className='flex flex-row gap-5 items-start'>
				<Avatar>
					<AvatarImage src={avatarUrl} />
					<AvatarFallback>{getFallback()}</AvatarFallback>
				</Avatar>
				<div>
					<CardTitle className='text-lg font-bold'>
						<span>{userName}</span>
						<span> {message}</span>
					</CardTitle>
					<small className='text-muted-foreground text-sm'> {timestamp}</small>
				</div>
			</CardHeader>
			<CardFooter className='flex justify-end'>
				<Button variant='outline' size='icon'>
					<EyeIcon className='size-4' />
				</Button>
			</CardFooter>
		</Card>
	);
}
