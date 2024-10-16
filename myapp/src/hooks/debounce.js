import { useEffect, useState } from "react";

function useDebounce(value,timer=500){
   const [debouncedVal,setDebouncedVal] = useState(value);

   useEffect(()=>{
      let timerId = setTimeout(()=>{
          setDebouncedVal(value)
      },timer)
    return ()=>{
        clearTimeout(timerId)
    }
   },[value,timer])

   return debouncedVal;
}

export default useDebounce;