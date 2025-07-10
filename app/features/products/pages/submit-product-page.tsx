import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-page';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';
import { useState } from 'react';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Submit Product | wemake' },
		{ name: 'description', content: 'Submit your product to our community' },
	];
};

export default function SubmitProductPage() {
	const [icon, setIcon] = useState<string | null>(null);
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (event.target.files?.length) {
			const file = event.target.files[0];
			setIcon(URL.createObjectURL(file));
		}
	};
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
					<Button type='submit' className='w-full text-foreground' size='lg'>
						Submit
					</Button>
				</div>
				<div className='flex flex-col space-y-2'>
					<div className='size-40 rounded-xl shadow-xl overflow-hidden bg-muted'>
						{icon ? (
							<img src={icon} alt='icon' className='size-full object-cover' />
						) : null}
					</div>
					<Label className='flex flex-col items-start gap-1'>
						Icon
						<small className='text-muted-foreground'>
							This is the icon of your product
						</small>
					</Label>

					<Input
						type='file'
						className='w-1/2'
						onChange={onChange}
						required
						name='icon'
					/>
					<div className='flex flex-col text-xs'>
						<span className='text-muted-foreground'>
							Recommended size: 128x128[x]
						</span>
						<span className='text-muted-foreground'>
							Allowed formats: PNG, JPEG
						</span>
						<span className='text-muted-foreground'>Max file size: 1MB</span>
					</div>
				</div>
			</Form>
		</div>
	);
}
