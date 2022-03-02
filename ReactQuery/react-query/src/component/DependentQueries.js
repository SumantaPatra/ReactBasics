import { useQuery } from "react-query";
import axios from "axios";
const fetchUser = (email) => {
    return axios.get(`http://localhost:3001/users/${email}`)
}
const fetchCourse = (channelId) => {
    return axios.get(`http://localhost:3001/channels/${channelId}`)
}
export function DependentQueries({ email }) {

    const { data: user } = useQuery(['user', email], () => fetchUser(email))
    const channelId = user?.data?.channelId;

    useQuery(['course', channelId], () => fetchCourse(channelId), {
        enabled: !!channelId
    })


    console.log(user)
    return (
        <div>{ }</div>
    )
}
