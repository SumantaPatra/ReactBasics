import Link from "next/link"
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
    const clickHandle = () => {
        router.push('/blog')
    }
    return (
        <>
            <h1>Product</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <button onClick={clickHandle}>Submit</button>
        </>


    )
}