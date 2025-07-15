import { Form } from 'react-router';
import { Hero } from '~/common/components/hero';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Button } from '~/common/components/ui/button';
import { PRODUCT_STAGES } from '../constants';

export function meta() {
	return [{ title: 'Submit Team | Wemake' }];
}

export default function SubmitTeamPage() {
	return (
		<div className='space-y-20'>
			<Hero
				title='Submit Team'
				subtitle='Create a team and find a new member'
			/>
			<Form className='max-w-screen-2xl flex flex-col gap-10 mx-auto items-center'>
				<div className='grid grid-cols-3 w-full gap-10'>
					<InputPair
						label='What is the name of your product?'
						placeholder='e.g. "Wemake"'
						description='(20 characters max)'
						name='name'
						maxLength={20}
						type='text'
						id='name'
						required
					/>
					<SelectPair
						label='What is the stage of your product?'
						name='stage'
						required
						description='Select the stage of your product'
						placeholder='Select the stage of your product'
						options={PRODUCT_STAGES}
					/>
					<InputPair
						label='What is the size of your team?'
						description='(1-100)'
						name='size'
						min={1}
						max={100}
						type='number'
						id='size'
						required
					/>
					<InputPair
						label='How much equity are you willing to give?'
						description='(*each)'
						name='equity'
						min={1}
						max={100}
						type='number'
						id='equity'
						required
					/>
					<InputPair
						label='What roles are you looking for?'
						placeholder='e.g. "React Developer, Backend Developer, Product Manager"'
						description='(comma separated)'
						name='roles'
						type='text'
						id='roles'
						required
					/>
					<InputPair
						label='What is the description of your product?'
						placeholder='e.g. "We are looking for a React Developer who is proficient in TypeScript and has experience with React Native. We are also looking for a Backend Developer who is proficient in Node.js and has experience with MongoDB."'
						description='(200 characters max)'
						name='description'
						maxLength={200}
						type='text'
						id='description'
						required
						textArea
					/>
				</div>
				<Button type='submit' className='w-full max-w-sm' size='lg'>
					Create team
				</Button>
			</Form>
		</div>
	);
}
