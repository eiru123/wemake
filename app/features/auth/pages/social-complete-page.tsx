import { useParams, useSearchParams } from 'react-router';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/social-complete-page';

export const meta: Route.MetaFunction = ({ params }) => {
	const provider = params.provider;
	const providerName =
		provider === 'google'
			? 'Google'
			: provider === 'github'
			? 'GitHub'
			: provider === 'facebook'
			? 'Facebook'
			: provider;

	return [
		{ title: `${providerName} 로그인 완료 - Wemake` },
		{ name: 'description', content: `${providerName} 로그인을 완료하세요` },
	];
};

export default function SocialCompletePage() {
	const { provider } = useParams();
	const [searchParams] = useSearchParams();

	const getProviderName = (provider: string) => {
		switch (provider) {
			case 'google':
				return 'Google';
			case 'github':
				return 'GitHub';
			case 'facebook':
				return 'Facebook';
			default:
				return provider;
		}
	};

	const providerName = getProviderName(provider || '');
	const error = searchParams.get('error');
	const success = searchParams.get('success');

	if (error) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>로그인 오류</CardTitle>
					<CardDescription>
						{providerName} 로그인 중 오류가 발생했습니다
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='text-center space-y-4'>
						<div className='text-sm text-red-600'>
							{error === 'access_denied'
								? '로그인이 취소되었습니다'
								: '로그인 중 오류가 발생했습니다'}
						</div>
						<Button className='w-full'>다시 시도</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>로그인 완료</CardTitle>
				<CardDescription>
					{providerName} 계정으로 성공적으로 로그인했습니다
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='text-center space-y-4'>
					<div className='text-sm text-green-600'>
						잠시 후 메인 페이지로 이동합니다
					</div>
					<Button className='w-full'>메인 페이지로 이동</Button>
				</div>
			</CardContent>
		</Card>
	);
}
