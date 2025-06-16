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
export default [index('common/pages/home-page.tsx')] satisfies RouteConfig;
