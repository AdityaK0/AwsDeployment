import React, { useState } from 'react'

function Counter() {
  let [value,updateValue] = useState(0)
    
  const valueUpdater = (e)=>{
    let currentSituation = e.target.name
    
    if(currentSituation == "increase") updateValue(value+1);
    if(currentSituation == "decrease") updateValue(value-1);
    if(currentSituation == "reset") updateValue(value*0);

    
  }
  return (
    <div className=' justify-center items-center border-[#212121] border-2 p-10 rounded-3xl'> 
        <h1 className='text-center cursor-pointer text-2xl mb-4'>Counter</h1>
         <div className='mt-2 m-auto text-4xl py-3 max-w-20 max-h-32 text-center cursor-pointer' >
            {value}
         </div>
         <div className='mt-9 w-72 max-h-20 justify-between flex'>
            <button className='text-3xl  rounded text-center cursor-pointer' name='decrease' onClick={(e)=>valueUpdater(e)} >-</button>  
            <button className='text-2xl  rounded text-center cursor-pointer' name='reset' onClick={(e)=>valueUpdater(e)}>🔄️</button>
            <button className='text-2xl  rounded text-center cursor-pointer' name='increase' onClick={(e)=>valueUpdater(e)}>+</button>
         </div>

         <div>
          adding at center 
         </div>
    </div>
  )
}

export default Counter