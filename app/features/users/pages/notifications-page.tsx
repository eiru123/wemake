import { NotificationCard } from '~/features/users/components/notification-card';

export function meta() {
	return [{ title: 'Notifications | Wemake' }];
}

export default function NotificationsPage() {
	return (
		<div className='space-y-20'>
			<h1 className='text-4xl font-bold'>Notifications</h1>
			<div className='flex flex-col items-start gap-5'>
				<NotificationCard
					userName='Steve Jobs'
					avatarUrl='https://github.com/stevejobs.png'
					avatarFallback='S'
					message='followed you'
					timestamp='2 days ago'
					seen={false}
				/>
			</div>
		</div>
	);
}
