import { useState, useEffect } from "react"
import axios from 'axios'
export function SuperHeros() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [err, setErr] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3001/superheroes')
            .then((res) => { setData(res.data); setLoading(false) })
            .catch((e) => { setErr(e.message); setLoading(false) })
    }, [])
    if (isLoading) return (<>loading...</>)
    if (err) return (<>{err}</>)

    return (
        <>
            {
                data.map((superhero) => {
                    return (<div key={superhero.id}>{superhero.name}</div>)
                })
            }
        </>
    )
}
