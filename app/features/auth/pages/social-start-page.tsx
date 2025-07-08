import { useParams } from 'react-router';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/social-start-page';

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
		{ title: `${providerName} 로그인 - Wemake` },
		{ name: 'description', content: `${providerName}을 통해 로그인하세요` },
	];
};

export default function SocialStartPage() {
	const { provider } = useParams();

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

	return (
		<Card>
			<CardHeader>
				<CardTitle>{providerName} 로그인</CardTitle>
				<CardDescription>
					{providerName} 계정으로 Wemake에 로그인하세요
				</CardDescription>
			</CardHeader>
			<CardContent className='space-y-4'>
				<div className='text-center space-y-4'>
					<div className='text-sm text-gray-600'>
						{providerName} 인증 페이지로 이동합니다
					</div>
					<Button className='w-full'>{providerName}로 계속하기</Button>
				</div>
			</CardContent>
		</Card>
	);
}
