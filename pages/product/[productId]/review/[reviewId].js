import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter();
    console.log('ROUTER IN REVIEW',router)
    const { reviewId, productId} = router.query
    return(
        <h1>Product id =   {productId} , Review id = {reviewId}</h1>
    )
};

/**
 * /product/id/review/id
 */