import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/otp-start-page';
import { Form, Link } from 'react-router';
import InputPair from '~/common/components/input-pair';

export const meta: Route.MetaFunction = () => {
	return [{ title: 'OTP 인증 완료 | Wemake' }];
};

export default function OtpPage() {
	return (
		<div className='flex flex-col relative items-center justify-center h-full'>
			<div className='flex flex-col items-center justify-center gap-10 w-full max-w-md'>
				<div className='text-center'>
					<h1 className='text-2xl font-semibold'>Log in with OTP</h1>
					<p className='text-sm text-muted-foreground'>
						We will send you a 4-digit code to log in to your account.
					</p>
				</div>
				<Form className='w-full space-y-4'>
					<InputPair
						id='email'
						label='Email'
						description='Enter your email'
						name='email'
						required
						type='email'
						placeholder='i.e wemake@example.com'
					/>
					<Button type='submit' className='w-full'>
						Send OTP
					</Button>
				</Form>
			</div>
		</div>
	);
}
