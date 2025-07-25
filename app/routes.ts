import {
	type RouteConfig,
	index,
	layout,
	prefix,
	route,
} from '@react-router/dev/routes';

/**
 * 사용자 url의 위치에 따라 렌더링할 내용을 정의해서 react router에 알려주는 파일
 * react router는 하나의 프레임 워크
 * routes.ts 파일은 선택 사항이 아니고 이름도 고정이다. /app 폴더 안에 있어야 한다.
 *
 * index function
 * 사용자가 웹사이트의 홈으로 가는 index  페이지로 이동했을 때, home.tsx 컴포넌트를 렌더링할 것을
 * react 라우터에 알려주는 함수
 * route의 array를 export default 해야한다.
 *
 * about 페이지 주소로 이동하면 바로 컴포넌트를 렌더링 하는게 아님.
 * root.tsx 파일을 확인한다. 이건 선택사항이 아니고 꼭 root.tsx파일이어야 한다.
 * outlet 컴포넌트를 렌더링해야할 컴포넌트로 바꾼 후에 리액트 라우터는 layout export를 찾는다.
 * 반드시 Layout으로 export되어야 한다.
 *
 * 아래의 배열의 있는 컴포넌트는 모두 root.tsx의 Layout 안에서 렌더링 된다.
 *
 * layout component가 왜 필요한가?
 * react router가 앱의 정상 동작을 처리할 뿐만 아니라 오류를 처리하는 것을 도와주기 때문이다.
 * happy path(정상 작동), sad path(에러)에 따라 렌더링 될 컴포넌트를 정의할 수 있다.
 * 그렇기에 layout component을 사용하는 것이다.
 */
export default [
	index('common/pages/home-page.tsx'),
	...prefix('products', [
		index('features/products/pages/products-page.tsx'),
		...prefix('leaderboards', [
			index('features/products/pages/leaderboard-page.tsx'),
			route(
				'/yearly/:year',
				'features/products/pages/yearly-leaderboard-page.tsx'
			),
			route(
				'/monthly/:year/:month',
				'features/products/pages/monthly-leaderboard-page.tsx'
			),
			route(
				'/daily/:year/:month/:day',
				'features/products/pages/daily-leaderboard-page.tsx'
			),
			route(
				'/weekly/:year/:week',
				'features/products/pages/weekly-leaderboard-page.tsx'
			),
			route(
				'/:period',
				'features/products/pages/leaderboards-redirection-page.tsx'
			),
		]),
		...prefix('categories', [
			index('features/products/pages/categories-page.tsx'),
			route('/:category', 'features/products/pages/category-page.tsx'),
		]),
		route('/search', 'features/products/pages/search-page.tsx'),
		route('/submit', 'features/products/pages/submit-product-page.tsx'),
		route('/promote', 'features/products/pages/promote-page.tsx'),
		...prefix(':productId', [
			index('features/products/pages/product-redirect-page.tsx'),
			layout('features/products/layouts/product-overview-layout.tsx', [
				route('/overview', 'features/products/pages/product-overview-page.tsx'),
				...prefix('reviews', [
					index('features/products/pages/product-reviews-page.tsx'),
				]),
			]),
		]),
	]),
	...prefix('/ideas', [
		index('features/ideas/pages/ideas-page.tsx'),
		route('/:ideaId', 'features/ideas/pages/idea-page.tsx'),
	]),
	...prefix('/jobs', [
		index('features/jobs/pages/jobs-page.tsx'),
		route('/:jobId', 'features/jobs/pages/job-page.tsx'),
		route('/submit', 'features/jobs/pages/submit-job-page.tsx'),
	]),
	...prefix('/auth', [
		layout('features/auth/layouts/auth-layout.tsx', [
			route('/login', 'features/auth/pages/login-page.tsx'),
			route('/join', 'features/auth/pages/join-page.tsx'),
			...prefix('/otp', [
				route('/start', 'features/auth/pages/otp-start-page.tsx'),
				route('/complete', 'features/auth/pages/otp-complete-page.tsx'),
			]),
			...prefix('/social/:provider', [
				route('/start', 'features/auth/pages/social-start-page.tsx'),
				route('/complete', 'features/auth/pages/social-complete-page.tsx'),
			]),
		]),
	]),
	...prefix('community', [
		index('features/community/pages/community-page.tsx'),
		route('/:postId', 'features/community/pages/post-page.tsx'),
		route('/submit', 'features/community/pages/submit-post-page.tsx'),
	]),
	...prefix('/teams', [
		index('features/teams/pages/teams-page.tsx'),
		route('/:teamId', 'features/teams/pages/team-page.tsx'),
		route('/create', 'features/teams/pages/submit-team-page.tsx'),
	]),
	...prefix('/my', [
		layout('features/users/layouts/dashboard-layout.tsx', [
			...prefix('/dashboard', [
				index('features/users/pages/dashboard-page.tsx'),
				route('/ideas', 'features/users/pages/dashboard-ideas-page.tsx'),
				route(
					'/products/:productId',
					'features/users/pages/dashboard-product-page.tsx'
				),
			]),
		]),
		route('/profile', 'features/users/pages/my-profile-page.tsx'),
		route('/settings', 'features/users/pages/settings-page.tsx'),
		route('/notifications', 'features/users/pages/notifications-page.tsx'),
		layout('features/users/layouts/messages-layout.tsx', [
			...prefix('/messages', [
				index('features/users/pages/messages-page.tsx'),
				route('/:messageId', 'features/users/pages/message-page.tsx'),
			]),
		]),
	]),
	layout('features/users/layouts/profile-layout.tsx', [
		...prefix('users/:username', [
			index('features/users/pages/profile-page.tsx'),
			route('/products', 'features/users/pages/profile-products-page.tsx'),
			route('/posts', 'features/users/pages/profile-posts-page.tsx'),
		]),
	]),
] satisfies RouteConfig;
