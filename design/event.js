class Event{
    constructor(){
        // if(Event.instance){
        //     return Event.instance; // shared for all object
        // }
        this.map1 = new Map();
        this.map2 = new Map();
        this.map3 = new Map();
        // Event.instance = this
    }

    subscribe(name,callBack){
        if(this.map1.has(name)){
            const prevCallback = this.map1.get(name);
            this.map1.set(name,[...prevCallback,callBack])
        }else{
            this.map1.set(name,[callBack])
        }

        return {
            remove:()=>{
                const callBacks = this.map1.get(name);
                const filteredCb = callBacks.filter((cb)=> cb !== callBack);
                this.map1.set(name,filteredCb)
            }
        }

    }

    publish(name,payload){
        const callBacks = this.map1.get(name);
        callBacks?.forEach((cb)=>{
            cb(payload)
        })
    }

    publishAll(payload){
        
      this.map1.forEach((value,key)=>{
        console.log(value.length);
        
        value.forEach((cb)=>{
            cb(payload);
        })
      })
    }
   

}

const E1 = new Event();
const E2 = new Event();

const obj = E1.subscribe("key1",(payload)=>{
   console.log("key1",payload)
})
const obj2 = E2.subscribe("key1",(payload)=>{
    console.log("key1",payload)
 })

 E2.publishAll("all")