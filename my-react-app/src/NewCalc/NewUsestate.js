import React from 'react';
import { useState } from "react";
import Operations from './Operations';
function NewUsestate(){
    const[num1,setNum1] = useState('')
    const[num2,setNum2] = useState('')
    const[result,setResult] = useState('')
    const [arr] = useState(["+","-","*","/"])
    console.log(arr,"arr");
    const handleNum1Change=(event)=>{
        setNum1(event.target.value)
    }
    const handleNum2Change=(event)=>{
        setNum2(event.target.value)
        console.log(event.target.value,"lop")
    }
    const handleClick=(opr)=>{
        if(opr==="+"){

            setResult(Number(num1)+Number(num2))
            console.log(result);
        }
        if(opr==="-"){

            setResult(Number(num1)-Number(num2))
            console.log(result);
        }
    }
    function verify(){
        setResult("");
    }
    return(
        <>
        <input value={num1} onChange={handleNum1Change}></input>
        <input value={num2} onChange={handleNum2Change}></input>
        {arr.map((item,idx)=>{

            console.log(item,"item");
            return(

                <button key={idx} onClick={()=>handleClick(item)} >{item}</button>
            )
        })}
        {/* // <button onClick={()=>handleClick("sub")}>-</button>
        // <button></button>
        // <button></button> */}
        {/* <div>Result: {result}</div> */}
         <Operations onclickVerifiedFunction={verify} result={result}/>
        </>
    )
}
export default NewUsestate;