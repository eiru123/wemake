import { useState } from 'react';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { SelectTrigger } from './ui/select';
import { SelectValue } from './ui/select';
import { SelectContent } from './ui/select';
import { SelectItem } from './ui/select';

export default function SelectPair({
	name,
	required,
	label,
	description,
	placeholder,
	options,
}: {
	name: string;
	required?: boolean;
	label: string;
	description: string;
	placeholder: string;
	options: { label: string; value: string }[];
}) {
	const [open, setOpen] = useState(false);
	return (
		<div className='w-full space-y-2 flex flex-col'>
			<Label
				className='flex flex-col items-start'
				onClick={() => setOpen(true)}
			>
				{label}
				<small className='text-muted-foreground'>{description}</small>
			</Label>
			<Select
				name={name}
				required={required}
				onOpenChange={setOpen}
				open={open}
			>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
