/*eslint no-unused-vars: "error"*/

import React, { useEffect, useState } from 'react'

function SecondsCounter() { 
  let [value,setValue]  = useState(0);
  let [inputVal,setInputValue] = useState('');
  let [btnState,setbtnState] = useState(false)

    useEffect(() => {
        if (value>0) {
            let countingTimes = setInterval(()=>{
                setValue((previousValue)=>previousValue-1)
            },1000)
            return () => clearInterval(countingTimes);
        }
        else{
          setInputValue('')
          setValue(0)
          setbtnState(false)

        }

    }, [value])

  function inputValidator(e){
     console.log(e);
     
  }

  function startCounter(e){
        let inputValue = parseInt(e.target.previousElementSibling.value) || 0
        setValue(inputValue)  
        setbtnState(true)
  } 

  function inputValidator(e){
    let gotValue = e.target.value
    console.log(gotValue);
    
    if(!isNaN(gotValue) && gotValue!=0){
        setInputValue(gotValue)
    }
    else
    {
      setInputValue('')
    }
    
  } 
  return (
<div className="relative">
  <h1 className="text-center">Seconds Counter</h1>
  <div className="justify-center items-center m-5">{value}</div>

  <div className="flex justify-between w-96">
    <input
      type="text"
      placeholder="Enter number......"
      className="p-3 outline-none border-1 border-black rounded"
      value={inputVal}
      onInput={(e) => inputValidator(e)}
    />
    <button
      className="cursor-pointer px-8 py-1 outline-none border-1 border-black rounded"
      disabled={btnState}
      onClick={(e) => startCounter(e)}
    >
      Start
    </button>
</div>
</div>


  )
}

export default SecondsCounter