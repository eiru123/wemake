import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-job-page';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from '../constants';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Post a Job | wemake' },
		{ name: 'description', content: 'Post a new job opportunity' },
	];
};

export default function SubmitJobPage() {
	return (
		<div>
			<Hero
				title='Post a Job'
				subtitle='Reach out to the best developers in the world'
			/>
			<Form className='max-w-screen-2xl flex flex-col gap-10 mx-auto items-center'>
				<div className='grid grid-cols-3 gap-10'>
					<InputPair
						id='position'
						label='Position'
						description='(40 characters max)'
						name='position'
						maxLength={40}
						type='text'
						required
						placeholder='i.e Senior React Engineer'
					/>
					<InputPair
						id='overview'
						label='Overview'
						description='(400 characters max)'
						name='overview'
						maxLength={400}
						type='text'
						required
						placeholder='i.e We are looking for a Senior React Engineer.'
						textArea
					/>
					<InputPair
						id='responsibilities'
						label='Responsibilities'
						description='(400 characters max, comma separated)'
						name='responsibilities'
						maxLength={400}
						type='text'
						required
						placeholder='i.e Implement new features, Maintain code quality, etc.'
						textArea
					/>
					<InputPair
						id='qualifications'
						label='Qualifications'
						description='(400 characters max, comma separated)'
						name='qualifications'
						maxLength={400}
						type='text'
						required
						placeholder="i.e Bachelor's degree in Computer Science, 5+ years of experience, etc."
						textArea
					/>
					<InputPair
						id='benefits'
						label='Benefits'
						description='(400 characters max, comma separated)'
						name='benefits'
						maxLength={400}
						type='text'
						required
						placeholder='i.e Health insurance, Dental insurance, Vision insurance, etc.'
						textArea
					/>
					<InputPair
						id='skills'
						label='Skills'
						description='(400 characters max, comma separated)'
						name='skills'
						maxLength={400}
						type='text'
						required
						placeholder='i.e React, TypeScript, Node.js, etc.'
						textArea
					/>
					<InputPair
						id='companyName'
						label='Company Name'
						description='(40 characters max)'
						name='companyName'
						maxLength={400}
						type='text'
						required
						placeholder='i.e Meta Inc.'
					/>
					<InputPair
						id='companyLogoUrl'
						label='Company Logo URL'
						description='(40 characters max)'
						name='companyLogoUrl'
						type='url'
						required
						placeholder='i.e https://meta.com/logo.png'
					/>
					<InputPair
						id='companyLocation'
						label='Company Location'
						description='(40 characters max)'
						name='companyLocation'
						maxLength={40}
						type='text'
						required
						placeholder='i.e San Francisco, CA'
					/>
					<InputPair
						id='applyUrl'
						label='Apply URL'
						description='(40 characters max)'
						name='applyUrl'
						maxLength={40}
						type='url'
						required
						placeholder='i.e https://meta.com/apply'
					/>
					<SelectPair
						label='Job Type'
						description='Select the type of job'
						name='jobType'
						required
						placeholder='Select the type of job'
						options={JOB_TYPES.map((type) => ({
							label: type.label,
							value: type.value,
						}))}
					/>
					<SelectPair
						label='Job Location'
						description='Select the location of the job'
						name='jobLocation'
						required
						placeholder='Select the location of the job'
						options={LOCATION_TYPES.map((location) => ({
							label: location.label,
							value: location.value,
						}))}
					/>
					<SelectPair
						label='Job Salary'
						description='Select the salary range of the job'
						name='jobSalary'
						required
						placeholder='Select the salary range of the job'
						options={SALARY_RANGE.map((salary) => ({
							label: salary,
							value: salary,
						}))}
					/>
				</div>
				<Button type='submit' className='w-full max-w-sm' size='lg'>
					Post job for $100
				</Button>
			</Form>
		</div>
	);
}
