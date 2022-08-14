import Link from "next/link";
export default function ProductList({MyProductIdTest = 100}) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <h1>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h1>

      <h1>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h1>

      {/* replace = ramène à l'index */}
      <h1>
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </h1>

      <h1>
        <Link href= {`/product/${MyProductIdTest}`}> 
        {/* DYNAMIQUE PATH */}
          <a>Product {MyProductIdTest}</a>
        </Link>
      </h1>

    </>
  );
}
