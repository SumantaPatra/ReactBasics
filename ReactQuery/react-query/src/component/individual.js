import { useIndividual } from "../Hooks/useIndividual"
import { useParams } from "react-router-dom"
export function Individual() {
    const { id } = useParams();
    const { isLoading, data } = useIndividual(id);
    if (isLoading) return <>loading...</>
    return (

        <div>name:{data?.data.name}</div>


    )
}
