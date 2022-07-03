import React, { useState } from "react";
import ChildA from "./ChildA"

const App = ()=>{

  const [output,setOutput] = useState([]);

  const childdata =(dt)=>{
    setOutput(dt)
  }
  console.log(output);
  return(
    <>
    <h1>hiiimran</h1>
      {
        output.map((e,ind)=>{
          return <h1 key={ind}>{e}</h1>
        })
      }
      <ChildA data={childdata} />
    </>
  )
}

export default App