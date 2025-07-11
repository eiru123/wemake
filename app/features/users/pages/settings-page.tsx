import { useState } from 'react';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { Button } from '~/common/components/ui/button';
import { Input } from '~/common/components/ui/input';
import { Label } from '~/common/components/ui/label';

export function meta() {
	return [{ title: 'Settings | Wemake' }];
}

export default function SettingsPage() {
	const [avatar, setAvatar] = useState<string | null>(null);
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (event.target.files?.length) {
			const file = event.target.files[0];
			setAvatar(URL.createObjectURL(file));
		}
	};
	return (
		<div className='space-y-20'>
			<div className='grid grid-cols-6 gap-40'>
				<div className='col-span-4 flex flex-col gap-10'>
					<h2 className='text-2xl font-semibold'>Edit Profile</h2>
					<Form className='flex flex-col w-1/2 gap-5'>
						<InputPair
							label='Name'
							description='Your public name'
							name='name'
							id='name'
							required
							placeholder='e.g. John Doe'
						/>
						<SelectPair
							label='Role'
							description='What role do you identify the most with?'
							name='role'
							required
							placeholder='Select a role'
							options={[
								{ label: 'Developer', value: 'developer' },
								{ label: 'Designer', value: 'designer' },
								{ label: 'Product Manager', value: 'product-manager' },
								{ label: 'Founder', value: 'founder' },
								{ label: 'Other', value: 'other' },
							]}
						/>
						<InputPair
							label='Headline'
							description='An introduction to your profile'
							name='headline'
							id='headline'
							required
							placeholder='e.g. John Doe'
							textArea
						/>
						<InputPair
							label='Bio'
							description='Your public bio. It will be displayed on your profile page.'
							name='bio'
							id='bio'
							required
							placeholder='e.g. John Doe'
							textArea
						/>

						<Button className='w-full'>Update Profile</Button>
					</Form>
				</div>
				<aside className='col-span-2 p-6 rounded-lg vorder shadow-md'>
					<Label className='flex flex-col items-start gap-1'>
						Avatar
						<small className='text-muted-foreground'>
							This is your public avatar.
						</small>
					</Label>
					<div className='space-y-5'>
						<div className='size-40 rounded-full shadow-xl overflow-hidden bg-muted'>
							{avatar ? (
								<img
									src={avatar}
									alt='avatar'
									className='size-full object-cover'
								/>
							) : null}
						</div>

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
						<Button className='w-full'>Update Avatar</Button>
					</div>
				</aside>
			</div>
		</div>
	);
}
