import axios from "axios"
import { useQuery } from "react-query"
import { useQueryClient } from "react-query"
const fetchIndividual = ({ queryKey }) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:3001/superheroes/${id}`)
}
export function useIndividual(id) {
    const queryClient = useQueryClient();
    return useQuery(['superhero', id], fetchIndividual, {
        initialData: () => {
            const hero = queryClient.getQueryData('superhero')?.data?.find((hero) => hero.id === parseInt(id))
            if (hero) {
                return { data: hero }
            }
            else {
                return undefined;
            }
        }
    })
}