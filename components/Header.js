import Link from 'next/link'
const linkStyle = {
    marginRight: '1rem'
}


const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>홈</a></Link>
            <Link href="/about"><a style={linkStyle}>소개</a></Link>
            {/* prefetch -> 데이터를 먼저 불러온 후 라우팅 시장 */}
            <Link prefetch href="/ssr-test"><a style={linkStyle}>ssr 테스트</a></Link>
        </div>
    )
}
export default Header;