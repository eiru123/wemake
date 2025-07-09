import { SiKakaotalk, SiGithub } from '@icons-pack/react-simple-icons';
import { Lock } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { Separator } from '~/common/components/ui/separator';

export default function AuthButtons() {
	return (
		<div className='w-full flex flex-col items-center justify-center gap-10'>
			<div className='w-full flex flex-col items-center justify-center gap-2'>
				<Separator className='w-full' />
				<span className='text-xs text-muted-foreground uppercase font-medium'>
					Or continue with
				</span>
				<Separator className='w-full' />
			</div>
			<div className='w-full flex gap-2 flex-col'>
				<Button variant='outline' className='w-full' asChild>
					<Link to='/auth/social/kakao/start'>
						<SiKakaotalk className='w-4 h-4' />
						Kakao Talk
					</Link>
				</Button>
				<Button variant='outline' className='w-full' asChild>
					<Link to='/auth/social/github/start'>
						<SiGithub className='w-4 h-4' />
						GitHub
					</Link>
				</Button>
				<Button variant='outline' className='w-full' asChild>
					<Link to='/auth/otp/start'>
						<Lock className='w-4 h-4' />
						OTP
					</Link>
				</Button>
			</div>
		</div>
	);
}
