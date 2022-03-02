import Link from 'next/link';
export default function Home() {

  return (
    <>
      <Link href={'/posts'}><a>Post</a></Link>
      <h1>Home</h1>
    </>

  )
}


