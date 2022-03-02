import { useRouter } from 'next/router'
let house = [
    {
        price: 1000,
        name: 'h1'
    },
    {
        price: 2000,
        name: 'h2'
    },
    {
        price: 3000,
        name: 'h3'
    }
]
export default function Docs() {
    const { params = [] } = useRouter().query;
    if (params.length === 2) {
        let minPrice = params[0];
        let maxPrice = params[1];

        const filteredHouse = house.filter((h) => (h.price <= maxPrice && h.price >= minPrice));

        return (
            <>
                {
                    filteredHouse.map((h) => <h1>{h.name}</h1>)
                }
            </>
        )
    }
    else if (params.length === 1) {
        return <h1>{house.map((h) => <div>{h.price}</div>)}</h1>
    }
    else {
        return <h1>{house.map((h) => <div>{h.price}</div>)}</h1>
    }


}