import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';

/**
 * 폴더 구조는 feature based structure
 * 도메인 별로 (기능별로) 프로젝트 폴더를 나눈다.
 */
import type { Route } from './+types/root';
/**
 * vite 에만 있는 특별한 문법
 * 파일 이름 뒤에 ?url을 붙이면 해당 파일의 파일 경로를 반환한다.
 * 이렇게 하는 이유는 css를 url형태로 추가하기 때문이다.
 * tailwindcss는 이제 모든 클래스를 담고 있는게 아니라
 * 컴파일러의 역할을 하도록 진화했다. 모든 class이름을 전부 살펴보고, tilwind class가 있다면 해당 class에 해당하는 css를 찾아서 추가해준다.
 */
import stylesheet from './app.css?url';
console.log(stylesheet);
/**
 * 파일 이름 뒤에 ?url을 붙이면 파일 경로를 반환한다.
 */
import './app.css';
import Navigation from './common/components/navigation';

/**
 * 컴포넌트 head 영역에 link로 추가
 * root.tsx 파일에서만 한정된건 아님. 다른 페이지에서도 추가할 수 있음.
 * route등록을 했을 때 이러한 힘을 갖게 된다.
 */
export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{ rel: 'stylesheet', href: stylesheet },
];
// children에 App 컴포넌트를 렌더링할 것.
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='dark'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				{/* 아래 두 개가 react router가 나중에 js 코드로 교체할 컴포넌트들 
        Links: 링크를 렌더링하는 컴포넌트 placeholder 같은 컴포넌트. links function에서 export한 내용을 담아둠.
          각 페이지에서 추가한 링크들을 모두 렌더링 해준다.
        Meta: 메타 데이터를 렌더링하는 컴포넌트
        */}
				<Links />
			</head>
			<body>
				<main className='px-20'>{children}</main>
				{/* 아래 두 개가 react router가 나중에 js 코드로 교체할 컴포넌트들 
        ScrollRestoration: 스크롤 위치를 저장하고 복원하는 컴포넌트
        Scripts: 스크립트를 렌더링하는 컴포넌트
        */}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

/**
 * 컴포넌트 이름은 export default이기에 마음대로 해도 된다.
 * outlet은 일종의 placeholder 역할을 한다.
 * url에 따라 react router가 렌더링 해야 하는 컴포넌트로 바뀐다.
 */
export default function App() {
	return (
		<div className='py-28'>
			<Navigation
				isLoggedIn={true}
				hasNotifications={true}
				hasMessages={true}
			/>
			<Outlet />
		</div>
	);
}

/**
 * 에러 처리 컴포넌트
 * 에러가 발생하면 이 컴포넌트가 렌더링 된다.
 * 이 컴포넌트는 반드시 이 이름으로 작성되어야 한다. 반드시 export 되어야 한다.
 * route에서 에러가 발생했을 때 렌더링 될 component
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full p-4 overflow-x-auto'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
