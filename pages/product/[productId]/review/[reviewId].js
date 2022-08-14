import { useRouter } from "next/router";

export default function Review() {
    const router = useRouter();
    // console.log('ROUTER IN REVIEW',router);
    const { productId, reviewId} = router.query;
    <h1>Product id =   {productId}, Review id = {reviewId}</h1>
};
/**
 * /product/id/review/id
 */