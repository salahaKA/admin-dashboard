import React, { useEffect, useState } from 'react'
import { use } from 'react';

const Calculator = () => {
    const [input1, setInput1]= useState();
    const [input2, setInput2]= useState();
    const [result, setResult]= useState(0);


    useEffect(()=>{
        console.log("Mounted")
    },[])

    useEffect(()=>{
        console.log("State Updated");

    },[result])

    

    const calOperation= (op)=>{
        const n1= parseInt(input1);
        const n2= parseInt(input2)

        switch(op){
            case "add":
                setResult(n1+n2);
                break;
            case "sub":
                setResult(n1-n2);
                break;
            case "mul":
                setResult(n1*n2);
                break;
            case "div":
                setResult(n2!==0 ? n1/n2: "Cannot devide by zero");
                break;
            default:
                setResult("Invalid op")
                
        }
    }
  return (
    <>
    <div>
        <input type="number" placeholder="Enter first number" value={input1} onChange={(e)=> setInput1(e.target.value)}></input><br></br>
        <input type='number' placeholder='Entersecond number' value={input2} onChange={(e)=> setInput2(e.target.value)}></input>
    </div>

    <div>
        <button onClick={()=>calOperation("add")}>+</button>
        <button onClick={()=>calOperation("sub")}>-</button>
        <button onClick={()=>calOperation("mul")}>*</button>
        <button onClick={()=>calOperation("div")}>/</button>
    </div>

    <div>
        <h1>Result: {result}</h1>
    </div>
    </>
  )
}

export default Calculator