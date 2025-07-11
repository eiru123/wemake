import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from '~/common/components/ui/chart';
import {
	Area,
	AreaChart,
	CartesianGrid,
	Line,
	LineChart,
	XAxis,
} from 'recharts';

export function meta() {
	return [{ title: 'Dashboard Product | Wemake' }];
}

const chartData = [
	{ month: 'January', views: 186, visitors: 100 },
	{ month: 'February', views: 305, visitors: 34 },
	{ month: 'March', views: 237, visitors: 65 },
	{ month: 'April', views: 73, visitors: 32 },
	{ month: 'May', views: 209, visitors: 66 },
	{ month: 'June', views: 214, visitors: 434 },
];
const chartConfig = {
	views: {
		label: 'Page views',
		color: 'var(--primary)',
	},
	visitors: {
		label: 'Visitors',
		color: 'var(--chart-3)',
	},
} satisfies ChartConfig;

export default function DashboardProductPage() {
	return (
		<div className='space-y-5'>
			<h1 className='text-2xl font-semibold mb-6'>Analytics</h1>
			<Card className='w-1/2'>
				<CardHeader>
					<CardTitle>Performance</CardTitle>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<AreaChart
							accessibilityLayer
							data={chartData}
							margin={{
								left: 12,
								right: 12,
							}}
						>
							<CartesianGrid vertical={false} />
							<XAxis
								// 보여줄 키 등록
								dataKey='month'
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								tickFormatter={(value) => value.slice(0, 3)}
							/>

							<Area
								dataKey='views'
								type='natural'
								stroke='var(--color-views)'
								strokeWidth={2}
								fill='var(--color-views)'
								dot={false}
							/>
							<Area
								dataKey='visitors'
								type='natural'
								stroke='var(--color-visitors)'
								strokeWidth={2}
								fill='var(--color-visitors)'
								dot={false}
							/>
							<ChartTooltip
								cursor={false}
								wrapperStyle={{ minWidth: '200px' }}
								content={<ChartTooltipContent indicator='dashed' />}
							/>
						</AreaChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</div>
	);
}
