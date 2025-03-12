import React from 'react'

function Button() {
  const handleClick = (event)=>{
    console.log(event);
    
  }

  return (
    <>
    <button className='px-3 py-1 border-r-black border-1 m-2 font-medium cursor-pointer text-white bg-[#212121]' onClick={(e)=>handleClick(e)} >Click Me</button>
    </>
    
  )
}


export function HoverButton({name,text,onClickFunction=null}){
    return(
        <button className="px-3 py-1 border border-black m-2 font-medium cursor-pointer text-white bg-[#212121] hover:bg-white hover:text-black "   onClick={onClickFunction?(e)=> onClickFunction(e):undefined} name={name}>
        {text}
      </button>
      
    )
}

export default Button