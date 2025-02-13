import { useState } from "react";

export default function CheckBox(){
    const [data,setData] = useState([
        {
            id:1,
            title:"some text"
        },
        {
            id:2,
            title:"some text"
        },
        {
            id:3,
            title:"some text"
        },
        {
            id:4,
            title:"some text"
        },
        {
            id:5,
            title:"some text"
        }
    ])
    const [selectedId,setSelectedId] = useState([])
    const handleChange = (e)=>{ 
      if(e.target.checked){
        setSelectedId([...selectedId,e.target.value])
      }else{
        setSelectedId(()=>{
            return selectedId.filter((el)=>(
                el !== e.target.value
            ))
        })
      }
    }
    return (
        <div>
            {
                data?.map((el)=>(
                    <div key={el.id}>
                        <input value={el.id} onChange={handleChange} type="checkbox" />
                        <div>{el.title}</div>
                    </div>
                ))
            }
            selected:
            {
                  selectedId?.map((id)=>(
                    <span>{id}</span>
                ))
            }
        </div>
    )
}