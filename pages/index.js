import Header from '../components/Header'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout';
const Index = () => (
    <Layout>
        <h1>
            Hi Next.js
        </h1>
        <h2>
            {/* aobut.js 가 바로 걸리네... */}
            <Link href="/about">
                <div style={{ background: 'black', color: 'white' }}>소개</div>
            </Link>
        </h2>
    </Layout>
)
/*
  "scripts": {
    "dev": "next",
    "build": "next build",  // yarn run bulid
    "start": "next start"   // yarn run start
  },
*/
//yarn run dev
export default Index;