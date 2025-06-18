import { Link } from 'react-router';
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';

interface PostCardProps {
	id: string;
	title: string;
	author: string;
	authorAvatarUrl?: string;
	category: string;
	postedAt: string;
	avatarFallback: string;
}

export default function PostCard({
	id,
	title,
	author,
	authorAvatarUrl,
	category,
	postedAt,
	avatarFallback,
}: PostCardProps) {
	return (
		<Link to={`/community/${id}`}>
			<Card className='bg-transparent hover:bg-card/50 transition-colors'>
				<CardHeader className='flex flex-row items-center gap-2'>
					<Avatar className='size-14'>
						<AvatarFallback>
							<span>{avatarFallback}</span>
						</AvatarFallback>
						{authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
					</Avatar>
					<div className='space-y-2'>
						<CardTitle>{title}</CardTitle>
						<div className='flex text-sm leading-tight gap-2 text-muted-foreground'>
							<span>{author} on</span>
							<span>{category}</span>
							<span>•</span>
							<span>{postedAt}</span>
						</div>
					</div>
				</CardHeader>
				<CardFooter className='flex justify-end'>
					<Button variant='link' asChild>
						<Link to={`/community/${id}`}>Reply &rarr;</Link>
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
