import { Form, Link } from 'react-router';
import type { Route } from './+types/join-page';
import InputPair from '~/common/components/input-pair';
import { Button } from '~/common/components/ui/button';
import AuthButtons from '~/features/components/auth-buttons';

export const meta: Route.MetaFunction = () => {
	return [{ title: 'Join | Wemake' }];
};

export default function JoinPage() {
	return (
		<div className='flex flex-col relative items-center justify-center h-full'>
			<Button variant='ghost' asChild className='absolute top-8 right-4'>
				<Link to='/auth/login'>Login</Link>
			</Button>
			<div className='flex flex-col items-center justify-center gap-10 w-full max-w-md'>
				<h1 className='text-2xl font-semibold'>create an account</h1>
				<Form className='w-full space-y-4'>
					<InputPair
						id='name'
						label='Name'
						description='Enter your name'
						name='name'
						required
						type='text'
						placeholder='Enter your name'
					/>
					<InputPair
						id='username'
						label='Username'
						description='Enter your username'
						name='username'
						required
						type='text'
						placeholder='i.e wemake'
					/>
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
						Create account
					</Button>
				</Form>
				<AuthButtons />
			</div>
		</div>
	);
}
