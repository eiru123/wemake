import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/login-page';
import { Form, Link } from 'react-router';
import InputPair from '~/common/components/input-pair';

export const meta: Route.MetaFunction = () => {
	return [{ title: '로그인 | Wemake' }];
};

export default function LoginPage() {
	return (
		<div className='flex flex-col relative items-center justify-center h-full'>
			<Button variant='ghost' asChild className='absolute top-8 right-4'>
				<Link to='/auth/join'>Join</Link>
			</Button>
			<div className='flex flex-col items-center justify-center gap-10 w-full max-w-md'>
				<h1 className='text-2xl font-semibold'>Log in to your account</h1>
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
						id='password'
						label='Password'
						description='Enter your password'
						name='password'
						required
						type='password'
						placeholder='Enter your password'
					/>
					<Button type='submit' className='w-full'>
						Log in
					</Button>
				</Form>
			</div>
		</div>
	);
}
