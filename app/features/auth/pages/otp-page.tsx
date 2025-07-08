import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import type { Route } from './+types/otp-page';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'OTP 인증 완료 - Wemake' },
		{ name: 'description', content: '인증 코드를 입력하세요' },
	];
};

export default function OtpPage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>인증 코드 입력</CardTitle>
				<CardDescription>
					휴대폰으로 전송된 6자리 인증 코드를 입력하세요
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<form className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='otp'>인증 코드</Label>
						<Input
							id='otp'
							type='text'
							placeholder='123456'
							maxLength={6}
							className='text-center text-lg tracking-widest'
							required
						/>
					</div>
					<Button type='submit' className='w-full'>
						인증 완료
					</Button>
				</form>

				<div className='text-center space-y-2'>
					<Button variant='link' className='text-sm'>
						인증 코드 재전송
					</Button>
					<div className='text-sm text-gray-600'>
						<Link to='/otp/start' className='text-blue-600 hover:underline'>
							번호 다시 입력
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
