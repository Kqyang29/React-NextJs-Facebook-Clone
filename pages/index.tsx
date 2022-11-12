import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login';
import { useSession } from 'next-auth/react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widget from '../components/Widget';
import {getSession} from "next-auth/react";
import { db } from '../firebase';


export default function Home({ posts }: any) {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>

      {/* header */}
      <Header />

      <main className='flex '>
        {/* sidebar */}
        <Sidebar/>
        {/* feed */}
        <Feed posts={posts} />
        {/* widget */}
        <Widget/>
      </main>

    </div>
  )
  
}

export const getServerSideProps = async (context: any) => {
 
  //no waiting when you refresh the page
  const posts = await db.collection('posts').orderBy("timestamp", "desc").get();

  const docs = await posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp:null
  }))

  return {
    props: {
      posts:docs
    }
  }

}
