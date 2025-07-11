import { Outlet } from 'react-router';
import { FlickeringGrid } from '~/common/components/ui/flickering-grid';

export default function AuthLayout() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
			<div>
				<FlickeringGrid
					squareSize={4}
					gridGap={5}
					maxOpacity={0.5}
					flickerChance={0.2}
					color='oklch(0.723 0.219 149.579)'
				/>
			</div>
			<Outlet />
		</div>
	);
}
