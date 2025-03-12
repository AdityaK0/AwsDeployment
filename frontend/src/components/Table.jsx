import React from 'react'

function Table(props) {
    console.log(props);
    
  return (
    <div>
        <table className='w-[700px] mt-2 border-1 max-h-56 overflow-y-auto rounded' >
          <thead className='border-1 rounded'>

          <tr>
            {props.th.map((element)=> <th className='p-1' key={element}>{element}</th>)}
          </tr>

          </thead>
           <tbody>
              {
                props.td.length>0?
                props.td.map((element,index)=>
                
                   <tr key={index}>
                        {
                            Object.keys(element).map((element1,index1)=><td className='text-center p-2' key={index1} >{element[element1]}</td>)
                            
                        }
                   </tr>
                )
                :null
              }
            {/* {cars.length>0? cars.map((element,index)=>(
    
                 <tr key={index}>
                  <td className='text-center p-2'>{element.id}</td>
                   <td className='text-center p-2'>{element.year} </td>
                   <td className='text-center p-2'>{element.carname}</td>
                   <td className='text-center p-2'>{element.carmodel}</td>
                   <td className='text-center p-2'>{element.price}</td>
                   <td className='flex justify-center p-2'>
                    <span className='flex gap-1 text-center'>
                      <span className=' p-1 bg-red-600 rounded cursor-pointer' onClick={()=>delDiv(element.id)}>🗑️</span>
                      <span className=' p-1 rounded bg-green-400 cursor-pointer' onClick={()=>valueUpdater(element.id,index)} >✒️</span>

                      <span id="up" className=' p-1 bg-blue-400 rounded cursor-pointer' onClick={(e)=>UpDownPosition(e,index)} >🔼</span>
                      <span  id="down" className=' p-1 rounded bg-blue-400 cursor-pointer' onClick={(e)=>UpDownPosition(e,index)}>🔽</span>
                    </span>
                  </td>

                 </tr>
                 
            )):null} */}
            </tbody>
        </table>
    </div>
  )
}

export default Table