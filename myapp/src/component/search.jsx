import { useCallback, useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/debounce";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [data,setData] = useState([]);
  const limit = useRef(null);
  const pages = useRef(1);
  const observerRef = useRef(null);
  const [isLoading,setIsLoading] = useState(false);

  const debounceVal = useDebounce(searchInput)

  const fetchData = useCallback(async()=>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${debounceVal}&offset=${(pages.current-1)*30}&limit=60`);
    const data = await response.json();
    limit.current = data.total;
    setData((prevData)=> [...prevData,...data.products])
    setIsLoading(false)
  },[debounceVal])

//   console.log(data.length,limit.current);
  

  const lastRef = useCallback((node)=>{
    if(isLoading ||  data.length >= limit.current) return
    
    if(observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
         pages.current+=1; 
         fetchData()
      }
    },{
        threshold:1
    })

    if(node) observerRef.current.observe(node)
    
  },[data.length, fetchData, isLoading])

  const searchHandler = (e) => {
    setSearchInput(e.target.value)
    pages.current=1;
  };
  useEffect(()=>{
    setIsLoading(true)
    fetchData()
  },[fetchData])




  return (
    <div>
      <input value={searchInput} onChange={searchHandler} type="text" />

      {
        data?.map((product,index)=>{
            if(data.length === index+1){
                return <div ref={lastRef} key={product.id}>{product.title}</div>
            }else{
                return <div key={product.id}>{product.title}</div>
            }
        })
      }
      <div>{isLoading && "Loading.."}</div>
    </div>
  );
}
