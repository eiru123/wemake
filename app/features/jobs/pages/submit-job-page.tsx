import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-job-page';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';
import { Textarea } from '~/common/components/ui/textarea';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Submit Job | wemake' },
		{ name: 'description', content: 'Post a new job opportunity' },
	];
};

export default function SubmitJobPage() {
	return (
		<div>
			<Hero title='Submit Job' subtitle='Post a new job opportunity' />
			<div className='max-w-screen-md mx-auto'>
				<Card>
					<CardHeader>
						<CardTitle>Job Details</CardTitle>
					</CardHeader>
					<CardContent>
						<form className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='jobTitle'>Job Title</Label>
									<Input
										id='jobTitle'
										placeholder='e.g. Senior Frontend Developer'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='companyName'>Company Name</Label>
									<Input id='companyName' placeholder='e.g. TechCorp' />
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='location'>Location</Label>
									<Input
										id='location'
										placeholder='e.g. Remote, San Francisco'
									/>
								</div>
								<div className='space-y-2'>
									<Label htmlFor='salary'>Salary Range</Label>
									<Input id='salary' placeholder='e.g. $80k - $120k' />
								</div>
							</div>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div className='space-y-2'>
									<Label htmlFor='type'>Job Type</Label>
									<Input id='type' placeholder='e.g. Full-time, Part-time' />
								</div>
								<div className='space-y-2'>
									<Label htmlFor='companyHq'>Company HQ</Label>
									<Input id='companyHq' placeholder='e.g. San Francisco, CA' />
								</div>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='description'>Job Description</Label>
								<Textarea
									id='description'
									placeholder='Describe the role, requirements, and benefits...'
									rows={8}
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='requirements'>Requirements</Label>
								<Textarea
									id='requirements'
									placeholder='List the required skills and experience...'
									rows={4}
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='benefits'>Benefits</Label>
								<Textarea
									id='benefits'
									placeholder='List the benefits and perks...'
									rows={4}
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='applyUrl'>Application URL</Label>
								<Input
									id='applyUrl'
									type='url'
									placeholder='https://company.com/apply'
								/>
							</div>

							<div className='flex gap-4 justify-end'>
								<Button variant='outline' type='button'>
									Save as Draft
								</Button>
								<Button type='submit'>Submit Job</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
