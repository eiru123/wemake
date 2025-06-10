/**
 * 반드시 export default 해야 한다. 아니면 에러 발생
 * 컴포넌트 이름은 중요하지 않다.
 * 이렇게 되면 router module이 된다.
 */
export default function AboutUs() {
	return <div>Tomato</div>;
}

/**
 * 아래 함수를 적용하기 위해서는 무조건 export를 해야한다.
 */
export const links = () => [{ rel: 'stylesheet', href: 'potato.com' }];

export const meta = () => [{ title: 'About Us' }];
