import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/product');
  }

  return(
    <>
    <h1>Home page</h1>
    <button onClick={handleClick}>Go to product with this button</button>
    </>
  )
};
/**
 * Navigating Programmatically
 */