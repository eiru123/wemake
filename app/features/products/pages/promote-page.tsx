import { Hero } from '~/common/components/hero';
import type { Route } from './+types/promote-page';
import { Form } from 'react-router';
import SelectPair from '~/common/components/select-pair';
import { Calendar } from '~/common/components/ui/calendar';
import { Label } from '~/common/components/ui/label';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { DateTime } from 'luxon';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Promote Product | wemake' },
		{
			name: 'description',
			content: 'Boost your product visibility with our promotion packages',
		},
	];
};

export default function PromotePage() {
	const [promotionPeriod, setPromotionPeriod] = useState<DateRange | undefined>(
		undefined
	);
	const totalDays =
		promotionPeriod?.from && promotionPeriod?.to
			? DateTime.fromJSDate(promotionPeriod.to).diff(
					DateTime.fromJSDate(promotionPeriod.from),
					'days'
			  ).days
			: 0;
	return (
		<div>
			<Hero
				title='Promote Your Product'
				subtitle='Boost your product visibility'
			/>
			<Form className='max-w-sm mx-auto flex flex-col gap-10 items-center'>
				<SelectPair
					label='Select a product'
					description='Select the product you want to promote'
					name='product'
					required
					placeholder='Select a product'
					options={[
						{ label: 'AI Dark Mode Maker', value: 'ai-dark-mode-maker' },
						{ label: 'AI Image Generator', value: 'ai-image-generator' },
						{ label: 'AI Text Generator', value: 'ai-text-generator' },
					]}
				/>
				<div className='flex flex-col items-center w-full gap-2'>
					<Label className='flex flex-col gap-1'>
						Select a range of dates for promotion
					</Label>
					<small className='text-muted-foreground text-center'>
						Minimum duration is 3 days.
					</small>
					<Calendar
						mode='range'
						selected={promotionPeriod}
						onSelect={setPromotionPeriod}
						min={3}
						disabled={{
							before: new Date(),
						}}
					/>
				</div>
				<Button disabled={totalDays === 0}>
					Go to checkout (${totalDays * 20})
				</Button>
			</Form>
		</div>
	);
}
