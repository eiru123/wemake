import { type RouteConfig, index, route } from '@react-router/dev/routes';

/**
 * 사용자 url의 위치에 따라 렌더링할 내용을 정의해서 react router에 알려주는 파일
 * react router는 하나의 프레임 워크
 * routes.ts 파일은 선택 사항이 아니고 이름도 고정이다. /app 폴더 안에 있어야 한다.
 *
 * index function
 * 사용자가 웹사이트의 홈으로 가는 index  페이지로 이동했을 때, home.tsx 컴포넌트를 렌더링할 것을
 * react 라우터에 알려주는 함수
 * route의 array를 export default 해야한다.
 */
export default [
	index('routes/home.tsx'),
	route('/about', 'potato/tomato.tsx'),
] satisfies RouteConfig;
