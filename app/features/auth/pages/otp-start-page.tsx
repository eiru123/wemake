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
import type { Route } from './+types/otp-start-page';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'OTP 인증 시작 - Wemake' },
		{ name: 'description', content: 'OTP를 통한 인증을 시작하세요' },
	];
};

export default function OtpStartPage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>OTP 인증</CardTitle>
				<CardDescription>
					휴대폰 번호를 입력하시면 인증 코드를 전송해드립니다
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<form className='space-y-4'>
					<div className='space-y-2'>
						<Label htmlFor='phone'>휴대폰 번호</Label>
						<Input id='phone' type='tel' placeholder='010-1234-5678' required />
					</div>
					<Button type='submit' className='w-full'>
						인증 코드 전송
					</Button>
				</form>

				<div className='text-center text-sm text-gray-600'>
					<Link to='/login' className='text-blue-600 hover:underline'>
						다른 방법으로 로그인
					</Link>
				</div>
			</CardContent>
		</Card>
	);
}
