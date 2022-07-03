import React, { useState } from "react";

const ChildA =(props)=>{

    const [item,setItem] = useState([]);
    const [input,setInput] = useState();



    const addItem =()=>{
        setItem([...item,input])
    }

      props.data(item);

    return(
        <>
        <input type="text" onChange={e=>setInput(e.target.value)} />
      
        <button onClick={addItem}>submit</button>
        </>
    )
}

export default ChildA;