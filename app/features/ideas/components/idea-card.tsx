import { Link } from 'react-router';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface IdeaCardProps {
	id: string;
	title: string;
	viewsCount: number;
	likesCount: number;
	postedAt: string;
	claimed?: boolean;
}

export default function IdeaCard({
	id,
	title,
	viewsCount,
	likesCount,
	postedAt,
	claimed,
}: IdeaCardProps) {
	return (
		<Card className='bg-transparent hover:bg-card/50 transition-colors'>
			<CardHeader>
				<Link to={`/ideas/${id}`}>
					<CardTitle className='text-xl'>
						<span
							className={cn(
								claimed &&
									'bg-muted-foreground selection:bg-muted-foreground text-muted-foreground'
							)}
						>
							{title}
						</span>
					</CardTitle>
				</Link>
			</CardHeader>
			<CardContent className='flex items-center text-sm'>
				<div className='flex items-center gap-1'>
					<EyeIcon className='w-4 h-4' />
					<span>{viewsCount}</span>
				</div>
				<DotIcon className='w-4 h-4' />
				<span>{postedAt}</span>
			</CardContent>
			<CardFooter className='flex justify-end gap-2'>
				<Button variant='outline'>
					<HeartIcon className='w-4 h-4' />
					<span>{likesCount}</span>
				</Button>
				{claimed ? (
					<Button variant='outline' disabled>
						<LockIcon className='size-4' />
						Claimed
					</Button>
				) : (
					<Button asChild>
						<Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
