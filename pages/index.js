import Link from 'next/link';
export default function Home() {

  return(
    <>
    <h1>Home page for next JS</h1>
    <Link href="/user">
    <a>Go to user</a>
    </Link>
    </>
  )
};
