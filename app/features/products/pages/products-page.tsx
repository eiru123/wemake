import { redirect, type MetaFunction } from 'react-router';

export function loader() {
	return redirect('/products/leaderboards');
}
