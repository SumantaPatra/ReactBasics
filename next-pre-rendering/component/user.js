export default function User({ users }) {
    return (<div>{users.map(user => <div>{user.name}</div>)}</div>)
}