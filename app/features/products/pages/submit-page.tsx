import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-page';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import { Select } from '~/common/components/ui/select';
import { SelectContent } from '~/common/components/ui/select';
import { SelectItem } from '~/common/components/ui/select';
import { SelectTrigger } from '~/common/components/ui/select';
import { SelectValue } from '~/common/components/ui/select';
import SelectPair from '~/common/components/select-pair';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Submit Product | wemake' },
		{ name: 'description', content: 'Submit your product to our community' },
	];
};

export default function SubmitPage() {
	return (
		<div>
			<Hero
				title='Submit Your Product'
				subtitle='Share your product with the world'
			/>
			<Form className='grid grid-cols-2 gap-10 max-w-screen-lg mx-auto'>
				<div className='space-y-5'>
					<InputPair
						label='Name'
						description='This is the name of your product.'
						type='text'
						name='name'
						id='name'
						required
						placeholder='Name of your product'
					/>
					<InputPair
						label='Tagline'
						description='(60 characters or less'
						type='text'
						name='tagline'
						id='tagline'
						required
						placeholder='A concise description of your product'
					/>
					<InputPair
						label='URL'
						description='(60 characters or less'
						type='url'
						name='url'
						id='url'
						required
						placeholder='https://www.example.com'
					/>
					<InputPair
						textArea
						label='Description'
						description='(60 characters or less'
						type='text'
						name='description'
						id='description'
						required
						placeholder='A detailed description of your product'
					/>
					<SelectPair
						label='Category'
						description='The category of your product'
						name='category'
						required
						placeholder='Select a category'
						options={[
							{ label: 'Productivity', value: 'productivity' },
							{ label: 'Design', value: 'design' },
						]}
					/>
				</div>
			</Form>
		</div>
	);
}
