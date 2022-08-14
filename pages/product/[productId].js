import { useRouter } from "next/router";

export default function ProductDetail() {
    const router = useRouter();
    console.log('MON ROUTER = ',router);
    const productId = router.query.productId
    return(
        <h1>Details about page {productId} </h1>
    )
};
// https://essential-dev-skills.com/nextjs/developpons-avec-next/le-routing
