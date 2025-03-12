import React from 'react'
import PropTypes, { string }  from 'prop-types'

function ListComponent(props) {
     
   
        if(props.items.length>0) {
            return(
            <div className='flex flex-col items-center justify-center flex-wrap '>
            <h1 className="text-xl font-bold text-center mt-4 text-blue-500">{props.category}</h1>
            
            <ol className='list-decimal list-inside'>
              {props.items}
            </ol>
            </div>
          )
            
        }


    // fighters.sort((a,b)=> a.name.localeCompare(b.name))   // ASC order sort by name 
    // fighters.sort((a,b)=> b.name.localeCompare(a.name))      // DSC

    //  fighters.sort((a,b)=>{
    //     if (a.winning_streak !== b.winning_streak) {
    //         return b.winning_streak - a.winning_streak // first sort by ws
    //     }
    //     return a.weight - b.weight         // sort by weight
        
    //  })

    // const lowerthan150 = fighters.filter((element) => element.weight<150).map((element,index)=><li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-72 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)

    // const listElements = fighters.map((element,index) => <li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-72 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)
    


}


ListComponent.PropTypes = {
    category:PropTypes.string,
    items:PropTypes.array
}

export default ListComponent


