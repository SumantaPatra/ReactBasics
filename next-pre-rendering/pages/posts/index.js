import Link from 'next/link'
export default function PostsList({ posts }) {
    return (
        <>
            {
                posts.map((post) => <div> <Link href={`posts/${post.id}`}>{post.body}</Link> <hr /></div>)

            }

        </>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data
        }
    }
}

