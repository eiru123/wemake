import { Form } from 'react-router';
import { Hero } from '~/common/components/hero';
import InputPair from '~/common/components/input-pair';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '~/common/components/ui/avatar';
import { Badge } from '~/common/components/ui/badge';
import { Button } from '~/common/components/ui/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';

export function meta() {
	return [{ title: 'Team | Wemake' }];
}

export default function TeamPage() {
	return (
		<div className='space-y-20'>
			<Hero title="Join lynn's team" />
			<div className='grid grid-cols-6 gap-40 items-start'>
				<div className='col-span-4 grid grid-cols-4 gap-5'>
					{[
						{
							title: 'Product name',
							value: 'Doggie Social',
						},
						{
							title: 'Stage',
							value: 'MVP',
						},
						{
							title: 'Team Size',
							value: 3,
						},
						{
							title: 'Available Equity',
							value: 50,
						},
					].map((item) => (
						<Card>
							<CardHeader>
								<CardTitle className='text-sm font-medium text-muted-foreground'>
									{item.title}
								</CardTitle>
								<CardContent className='p-0 font-bold text-2xl'>
									<p>{item.value}</p>
								</CardContent>
							</CardHeader>
						</Card>
					))}
					<Card className='col-span-2'>
						<CardHeader>
							<CardTitle className='text-sm font-medium text-muted-foreground'>
								Looking for
							</CardTitle>
							<CardContent className='p-0 font-bold text-2xl'>
								<ul className='text-lg list-disc list-inside'>
									{[
										'React Developer',
										'Backend Developer',
										'Product Manager',
										'UI/UX Designer',
									].map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</CardContent>
						</CardHeader>
					</Card>
					<Card className='col-span-2'>
						<CardHeader>
							<CardTitle className='text-sm font-medium text-muted-foreground'>
								Idea description
							</CardTitle>
							<CardContent className='p-0 font-medium text-xl'>
								<p>
									Doggie Social is a social media platform for dogs. It allows
									users to share photos and videos of their dogs with other dog
									owners.
								</p>
							</CardContent>
						</CardHeader>
					</Card>
				</div>
				<aside className='col-span-2 space-y-5 border rounded-lg p-6 shadow-sm'>
					<div className='flex gap-5'>
						<Avatar className='size-14'>
							<AvatarFallback>N</AvatarFallback>
							<AvatarImage src='https://github.com/eiru123.png' />
						</Avatar>
						<div className='flex flex-col gap-2'>
							<h4 className='text-lg font-medium'>Nicolas</h4>
							<Badge variant='secondary'>Entrepreneur</Badge>
						</div>
					</div>
					<Form className='space-y-5'>
						<InputPair
							label='Introduce yourself'
							description='Tell us about yourself'
							name='introduction'
							id='introduction'
							maxLength={200}
							required
							textArea
							placeholder="i.e. I'm a React Developwer with 3 years of experience"
						/>
						<Button type='submit' className='w-full'>
							Get in touch
						</Button>
					</Form>
				</aside>
			</div>
		</div>
	);
}
