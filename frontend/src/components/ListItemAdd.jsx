import React, { useState } from 'react'

function ListItemAdd() {
    
    let [itemlist,setitemlist] = useState(JSON.parse(localStorage.getItem("itemArray")) || []);
    let [inputval,setinputval] = useState("");
    

    function itemAdder(){
        if(inputval.trim().length>0){


            let itemLocalList = localStorage.getItem("itemArray")?JSON.parse(localStorage.getItem("itemArray")):[]

            itemLocalList.push({key: `${new Date().getTime()} - ${Math.random().toString(36).substring(2,5)}`,name:inputval})

            localStorage.setItem("itemArray",JSON.stringify(itemLocalList))
             
            setitemlist(itemLocalList)

             setinputval("")
        }
       


    }
    function itemRemover(index){
      setitemlist((prevList)=>{
        let getList = JSON.parse(localStorage.getItem("itemArray"))
        localStorage.setItem("itemArray",JSON.stringify(getList.filter((element)=> element.key != index)))
        let getDataList = JSON.parse(localStorage.getItem("itemArray"))
        // prevList = [...getDataList]
        return getDataList
      })
      console.log(index);
      
   }  
    function handleEnter(e){
        if(e.ctrlKey && e.which === 83){
          e.preventDefault();   
            itemAdder()
        }
    }

  return (
    <div>
        Items List
        <ul> 
          {itemlist.map((element,index)=> (
            <div className='flex w-72 bg-[#212121] rounded px-2 py-1 text-white mb-1 justify-between' key={element.key}>
            <li key={element.key}>{element.name}</li>
            <button className='' onClick={()=>itemRemover(element.key)}>❌</button>
            </div>
            ))}
        </ul>

        <input type="text" className='rounded-[2px] px-2 py-1 border-1 border-black outline-none '
        value={inputval}
        onChange={(e)=>setinputval(e.target.value)}
        onKeyDown={handleEnter}
        />
        <button className='rounded-[2px] border-1 border-black ml-1 px-2 py-1'
        onClick={itemAdder}
        >
             Add Item
        </button>
    </div>
  )
}

export default ListItemAdd