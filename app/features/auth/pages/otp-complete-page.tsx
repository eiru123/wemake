import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/otp-complete-page';
import { Form, Link } from 'react-router';
import InputPair from '~/common/components/input-pair';

export const meta: Route.MetaFunction = () => {
	return [{ title: 'OTP 인증 완료 | Wemake' }];
};

export default function OtpCompletePage() {
	return (
		<div className='flex flex-col relative items-center justify-center h-full'>
			<div className='flex flex-col items-center justify-center gap-10 w-full max-w-md'>
				<h1 className='text-2xl font-semibold'>Confirm OTP</h1>
				<p className='text-sm text-muted-foreground'>
					Enter the OTP code sent to your email address.
				</p>
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
					<InputPair
						id='otp'
						label='OTP'
						description='Enter the OTP code'
						name='otp'
						required
						type='text'
						placeholder='i.e 1234'
					/>
					<Button type='submit' className='w-full'>
						Log in
					</Button>
				</Form>
			</div>
		</div>
	);
}
