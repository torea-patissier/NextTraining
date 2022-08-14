import Link from "next/link";
export default function Home() {
  return(
    <>
    <h1>Home page</h1>
    <Link href='blog'><a >Go to blog</a></Link>
    <br/>
    <Link href='product'><a >Go to product</a></Link>
    </>
  )
};
