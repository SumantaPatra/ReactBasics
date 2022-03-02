import axios from 'axios'
import { useQuery } from 'react-query'
export function useSuperHeros() {
    const fetchHero = () => {
        return axios.get('http://localhost:3001/superheroes')
    }
    return useQuery('superhero', fetchHero,
        {
            enabled: false
        })
}