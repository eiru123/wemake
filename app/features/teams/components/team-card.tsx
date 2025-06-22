import { Link } from 'react-router';
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { Badge } from '~/common/components/ui/badge';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';

interface TeamCardProps {
	id: string;
	leaderUserName: string;
	leaderAvatarUrl?: string;
	positions: string[];
	projectDescription: string;
}

export default function TeamCard({
	id,
	leaderUserName,
	leaderAvatarUrl,
	positions,
	projectDescription,
}: TeamCardProps) {
	return (
		<Link to={`/teams/${id}`}>
			<Card className='bg-transparent hover:bg-card/50 transition-colors'>
				<CardHeader className='flex flex-row items-center'>
					<CardTitle className='text-base leading-loose'>
						<Badge
							variant='secondary'
							className='inline-flex shadow-sm items-center text-base'
						>
							<span>@{leaderUserName}</span>
							<Avatar className='size-5'>
								<AvatarFallback>N</AvatarFallback>
								{leaderAvatarUrl && <AvatarImage src={leaderAvatarUrl} />}
							</Avatar>
						</Badge>
						<span>is looking for</span>
						{positions.map((role, index) => (
							<Badge key={index} className='text-base'>
								{role}
							</Badge>
						))}
						<span> to build </span>
						<span>{projectDescription}</span>
					</CardTitle>
				</CardHeader>
				<CardFooter className='justify-end'>
					<Button variant='link'>Join Team &rarr;</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
