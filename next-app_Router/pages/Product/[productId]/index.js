import { useRouter } from 'next/router'
export default function Product() {
    const router = useRouter();
    const id = router.query.productId;
    return (<h1>Product Details{id}</h1>)
}