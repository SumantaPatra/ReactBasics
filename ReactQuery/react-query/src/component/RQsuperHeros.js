import { useSuperHeros } from "../Hooks/useSuperHeros"
import { Link } from "react-router-dom";
export function RQsuperHeros() {

    const { isLoading, data, isError, error, refetch } = useSuperHeros();
    if (isLoading) return (<>loading...</>)
    if (isError) return (<>{error.message}</>)
    return (
        <>
            <button onClick={refetch}>Fetch</button>
            {
                data ? data.data.map((h) => {
                    return <div key={h.id}>
                        <Link to={`/individual/${h.id}`}>{h.name}</Link>
                    </div>
                }) : 'nothing'
            }

        </>
    )
}