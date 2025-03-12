import React, { useState } from 'react'

function Syncronus() {
  const [name,setName] = useState("")
  const [total,setTotal] = useState(0)
  const [pay,setPay] = useState("")
  const [shipping,setShipping] = useState("Pick Up")
  const [color,setColor] = useState("#000")

  function changeVal(e){
     let eventElementName = e.target.name
     if(eventElementName == "p") setName(e.target.value)
     if(eventElementName == "t") setTotal(e.target.value)
     if(eventElementName == "pay") setPay(e.target.value)
     if(eventElementName == "ship")  setShipping(e.target.value) 
     if(eventElementName == "color")  setColor(e.target.value) 

  }

  return (
    <div className='mt-4'>
        <input type="text" className='px-3 py-1 border-1 border-black rounded' name="p"  onChange={(e)=>changeVal(e)}/>
        <p className='mt-3 font-semibold '>Name: {name}</p>

        <input type="number" className='px-3 py-1 border-1 border-black rounded' name="t"  onChange={(e)=>changeVal(e)} />
        <p className='mt-3 font-semibold '>Total: {total}</p>
         
         <select name="pay" onChange={(e)=>changeVal(e)} className=' outline-none px-3 py-1 border-1 border-black rounded'>
            <option value="">Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Master Card">Master Card</option>
            <option value="UPI">UPI</option>
            <option value="Credit Card">Credit Card</option>
         </select>
         <p className='mt-3 font-semibold w-72 mb-3 '>Selected Payment Method: {pay}</p>
         
         <label>
         <input type="radio" name="ship" value="Pick Up" id="" checked = {shipping === 'Pick Up' } onChange={(e)=>changeVal(e)}/> Pick Up
         </label> &nbsp;
         <label>
         <input type="radio" name="ship" value="Delivery" id="" checked = {shipping === "Delivery"} onChange={(e)=>changeVal(e)}/> Delievery
         </label>

         <p className='mt-3 font-semibold w-72  '>Ship Method: {shipping}</p>
        

        <div className='h-44 w-72 mt-6 rounded flex items-center justify-center text-black' style={{backgroundColor: color}}>
           <p className='text-white font-bold'>
            Selected Color : {color}
           </p>
        </div>
        <div className="flex justify-center items-center">
            <input type="color" id="color" name="color" style={{border:"1px solid white;"}} onChange={(e)=>changeVal(e)}/>  
        </div>



    </div>
  )
}

export default Syncronus