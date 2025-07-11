import { Outlet } from 'react-router';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarMenu,
	SidebarProvider,
} from '~/common/components/ui/sidebar';
import { MessageCard } from '~/features/users/components/message-card';

export default function MessagesLayout() {
	return (
		<SidebarProvider className='max-h-[calc(100vh-14rem)] overflow-hidden h-full min-h-full'>
			<Sidebar variant='floating' className='pt-16'>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenu>
							{Array.from({ length: 10 }).map((_, index) => (
								<MessageCard
									key={index}
									id={index.toString()}
									name={`User ${index}`}
									avatarUrl='https://github.com/shadcn.png'
									lastMessage={`Last message ${index}`}
								/>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<div className='w-full pt-16'>
				<Outlet />
			</div>
		</SidebarProvider>
	);
}
