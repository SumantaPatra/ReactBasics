import { useRouter } from "next/router"
export default function Review() {

    const { productId, review } = useRouter().query;

    return (<h1>product {productId} for {review}</h1>)

}