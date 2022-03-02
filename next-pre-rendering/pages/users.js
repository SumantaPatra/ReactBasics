import User from "../component/user";
export default function Users({ users }) {
    return (
        <User users={users} />
    )
}
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }

}

