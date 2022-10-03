import Head from 'next/head'
import IntroHeader from "../components/introHeader";
import RecentPosts from "../components/recentPosts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <IntroHeader />
        <RecentPosts />
    </div>
  )
}
