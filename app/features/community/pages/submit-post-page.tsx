import { Hero } from '~/common/components/hero';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Button } from '~/common/components/ui/button';

export function meta() {
	return [{ title: 'Submit Post | Wemake' }];
}

export default function SubmitPostPage() {
	return (
		<div className='space-y-20'>
			<Hero
				title='Create Discussion'
				subtitle='Ask questions, share ideas, and connect with other developers'
			/>
			<Form className='flex flex-col gap-10 max-w-screen-md mx-auto'>
				<InputPair
					label='Title'
					description='(40 characters or less'
					type='text'
					name='title'
					id='title'
					placeholder='i.e What is the best productivity tool?'
					required
				/>
				<SelectPair
					label='Category'
					description='Select the category that best fits your discussion'
					name='category'
					required
					placeholder='i.e Productivity'
					options={[
						{ label: 'Productivity', value: 'productivity' },
						{ label: 'Programming', value: 'programming' },
						{ label: 'Design', value: 'design' },
					]}
				/>
				<InputPair
					label='Content'
					description='(1000 characters or less'
					type='text'
					name='content'
					id='content'
					placeholder='i.e I am looking for a tool that can help me manage my time.'
					required
					textArea
				/>
				<Button className='mx-auto'>Create Discussion</Button>
			</Form>
		</div>
	);
}
