import { useEffect, useRef, useState } from "react"

export default function Star({len=5,changeHandler}){
  const [currentIndex,setCourrentIndex] = useState(-1);
  const containerRef = useRef(null)

  
  const clickHandler = (value)=>{
    console.log(value);
    
    setCourrentIndex(value);
    // changeHandler(value);
  }
  const handleMouseHover = (index)=>{
    for(let i=0; i<containerRef.current.children.length; i++){
        if(i< index){
            containerRef.current.children[i].classList.add("fill")
        }
    }
  }

  const handleMouseOut = (index)=>{
    const stars = containerRef.current.children;
    for (let i = 0; i < stars.length; i++) {
        if(i >= currentIndex){
            stars[i].classList.remove("fill")
        }
    }

  }

  useEffect(()=>{
   
    document.addEventListener("click",(e)=>{
      if(containerRef.current && !containerRef.current.contains(e.target)){
        setCourrentIndex(-1)
      } 
    })

    

  },[])


    return (
        <>
           <div ref={containerRef} className="">
            {
                 [...Array(len)].map((_,index)=>{
                    return (
                        <>
                         <span 
                         className={`star ${index < currentIndex ? "fill":""}`}  
                         onClick={()=>clickHandler(index+1)}
                         onMouseOut={()=>handleMouseOut(index)}
                         onMouseOver={()=>handleMouseHover(index)}
                            >&#9734;</span>
                        </>
                    )
                })
            }
           </div>
         
        </>
    )


}