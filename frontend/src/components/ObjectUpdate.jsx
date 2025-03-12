import React, { useRef,useEffect, useState } from 'react'

function ObjectUpdate() {
    let [cars,setCars] = useState([])
    let [carsOrignalCopy,setcarsOrignalCopy] = useState([])

    let [year,setYear] = useState(new Date().getFullYear())
    let [carname,setCompany] = useState("")
    let [carmodel,setModel] = useState("")
    let [price,setPrice] = useState("")
    let [btnStatus,setbtnStatus] = useState(true)
    let [currentIndex,setcurrentIndex] = useState(null)
    let [divs,setDivs] = useState(false)
    let [confirmDelete,setconfirmDelete] = useState(false)
    let [carid,setcarid] = useState(0)
    let inputRefs = useRef([]);
    let [tdbg,settdbg] = useState(false)
    
    
    async function fetchData() {
      try {
        console.log("started");
        
        const response = await fetch(import.meta.env.VITE_API_URL + 'cars'+"/", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
         
        console.log("Response Headers:", response.headers);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Data:", data);
        
        setCars((prevList)=>{
          prevList = data
          return prevList
        })
        setcarsOrignalCopy((prevList)=>{
          prevList = data
          return prevList
        })

        return data;
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    }

    async function deleteCar(carid){
        try {
          const deleteMsg = await fetch(import.meta.env.VITE_API_URL + 'cars/'+carid+"/",{
            method:"DELETE",
            headers:{
              'Content-Type':'application/json',
            }
          })
          console.log(deleteMsg.headers);
  
          if (!deleteMsg.ok) {
            throw new Error(`HTTP error! Status: ${deleteMsg.status}`);
          }
          if (deleteMsg.status === 200) {
            let msg = await deleteMsg.json();
            fetchData()
            console.log(msg);
  
            return msg
          } 
          else {
            throw new Error("Got Error");
          }
          
        } catch (error) {
          console.log("bi Lasania got error",error);
          
        }


    }
    function carRemover(index){
      
      const deleteApidata = async ()=>{
         const msdel = await deleteCar(index);
         return msdel
      }

      deleteApidata();
      setYear(new Date().getFullYear())
      resetInputState()
      setbtnStatus(true)
      setconfirmDelete(false)

    }

    async function addCar(data){
      

      try {
        const response =  await fetch(import.meta.env.VITE_API_URL + 'cars/',{
          "method":"POST",
          "headers":{
            'Content-Type':'application/json',
          },
          "body":JSON.stringify(data)
  
        })
  
        if(!response.ok){
          const errorData = await response.json(); 
          throw new Error(`HTTP error! Status: ${response.status}. ${JSON.stringify(errorData)}`);
          
        } 
        const responseMsg = await response.json();
        console.log(responseMsg);
        fetchData()
        return responseMsg;


      } catch (error) {
        console.log("Error in addCar:", error);
        
      }
       
    }
    
    useEffect(() => {
      console.log("API URL:", import.meta.env.VITE_API_URL);
      fetchData()
    }, []);
    
    
    function resetInputState(){
      setYear(new Date().getFullYear())
      setCompany("")
      setModel("")
      setPrice("")
      setcarid(0)
    }

    function valueAdder(e){
        if (e.target.name == "y") {setYear(e.target.value)}
        if (e.target.name == "c") setCompany(e.target.value)          
        if (e.target.name == "m") setModel(e.target.value)
        if (e.target.name == "pr") setPrice(e.target.value)
        // console.log(inputRefs);
        
        if(e.target.name == 'bxt'){
          let wantToExecute = false
        
          inputRefs.current.map((element,index)=>{
              if(!element.value){
                element.classList.add('border-1', 'border-red-600' ,'text-red')
                element.placeholder = "Field is required .."
                wantToExecute = false

                
                
              }
              else{
                wantToExecute = true
                element.classList.remove('border-1', 'border-red-600','text-red',)
                if(index === 2) element.placeholder = "Enter Model ...."
                if(index === 3) element.placeholder = "Enter Price ...."
              }
               
          })


          if(wantToExecute) {
            let data = {
              "carname":carname,
              "carmodel":carmodel,
              "year":year,
              "price":price,
  
             }
             addCar(data);
            resetInputState()
            
           }


        }  
    }

    function valueUpdater(dbindex,index){
      
      setbtnStatus(false)
      setDivs(true)
      
      const selectedCar = cars[index]
      console.log("cc",selectedCar);
      
      if(selectedCar){
        setYear(selectedCar.year)
        setCompany(selectedCar.carname)
        setModel(selectedCar.carmodel)
        setPrice(selectedCar.price)

        setcurrentIndex(index)
        setcarid(dbindex)
      }

    }

    async function valueUpdaterAdder(){

      try {
        let data = {
          "id":carid,
          "carname":carname,
          "carmodel":carmodel,
          "year":year,
          "price":price,
  
         }
        const updateValMsg = await fetch(import.meta.env.VITE_API_URL+'cars/'+carid+"/",{
          "method":"PUT",
          "headers":{
            'Content-Type':'application/json'
          },
          "body":JSON.stringify(data)
        })
  
        if(!updateValMsg.ok){
          const errorData = await updateValMsg.json()
          throw new Error(`Error ${updateValMsg.status} . ${JSON.stringify(errorData)}`)
        }


        const responseMsg = await updateValMsg.json()
        cars.map((element)=>{
          if(element.id == carid){
            settdbg(true)
            console.log("Upx",element);
          } 
          
          
        })
        setbtnStatus(true)
        resetInputState()
        fetchData();
        return responseMsg

        


        
        
      } catch (error) {
        console.log("Got Error =>  ",error )
      }


      // setCars((previousCarList)=>{
      //   let updatedCarList = [...previousCarList]

      //   updatedCarList[currentIndex] = { Year: year, Company: carname, Model: carmodel}
        
      //   return updatedCarList
        
      // })

    }


    function buttonHandler(e){
      
      if(e.key == "Enter"){
        let btn = e.target.nextElementSibling
        btn.click()
        
      }
    }

    function showDiv(e){
      console.log();
      let currentDiv = e.target.name
      if(currentDiv == "add") setDivs(!divs);
      if(currentDiv == "cancelDelete"){
        setconfirmDelete(false)
      }   
    }
    function delDiv(index){

      setconfirmDelete(true)
      console.log("send",index);

      setcurrentIndex(index)  
      

    }

    function UpDownPosition(e,index){
      let direction = e.target.id
      console.log(direction,e);
      
        if (direction == "up" && index>0) {


          setCars((previousCarList) => {
            let updatedCarList = [...previousCarList]; // Ensure a new array is created
        
            // Swap elements safely
            [updatedCarList[index], updatedCarList[index - 1]] = 
              [updatedCarList[index - 1], updatedCarList[index]];
        
            return updatedCarList;
          });
           
          
        }
        if(direction == "down" && index<cars.length-1)
        {
          setCars((previousCarList) => {
            let updatedCarList = [...previousCarList]; // Ensure a new array is created
        
            // Swap elements safely
            [updatedCarList[index], updatedCarList[index + 1]] = 
              [updatedCarList[index + 1], updatedCarList[index]];
        
            return updatedCarList;
          });
        }
    }

    function querryFinder(e) {
      const inputValue = e.target.value; 

      setCars(
        inputValue == ""?
        carsOrignalCopy:
        carsOrignalCopy.filter((element)=>
          element.carname.toLowerCase().includes(inputValue) ||
          element.carmodel.toLowerCase().includes(inputValue)||
          String(element.price).toLowerCase().includes(inputValue)

        )
      )
    }

    function sortByfield(e){
      console.log(e.target.id);
      
      if(e.target.id === "thyear") {
        setCars(carsOrignalCopy.sort((a,b)=>a.year - b.year))
              
    }
  }
    
  function changeBg(e){
    console.log(e);   
    tdbg(false)
    return 'bg-green-600'
    
  }
    
  return (
    <div className='font-semibold  gap-2 mt-2'>
        <input type="text"   placeholder='Search ....' onChange={(e)=>querryFinder(e)}  name="querry"  className='outline-none block max-h-12 min-w-102 rounded mb-3 border-1 shadow-md border-gray-300 bg-white px-3 py-2' />
        
        <div className='flex w-102 justify-between'>
        <button name='add' className={divs?'rounded px-5 h-9 bg-red-400':'rounded px-5 h-9 bg-green-400'} onClick={(e)=>showDiv(e)}>{!divs?`Add Item`:`Close`}</button>
        
        {divs?
                <div >
                <input type="number" ref={(el) => inputRefs.current[0] = el}  onChange={(e)=>valueAdder(e)}  name="y" value={year} className='shadow-md border-gray-300 bg-white outline-none block max-h-12  rounded mb-3 border-1  px-3 py-2'/>

                <select name="c" ref={(el)=> inputRefs.current[1] = el} value={carname}  onChange={(e)=>valueAdder(e)} className="w-full p-2 border border-gray-300 rounded mb-3 px-3 max-h-12  py-2 shadow-md bg-white text-gray-800 focus:outline-none">
                  <option value="" disabled > Select Car Name</option>
                  <option className="bg-white text-gray-700" value="Ford">Ford</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes">Mercedes</option>
                </select>

                <input type="text"  ref={(el)=> inputRefs.current[2] = el} required  placeholder='Enter Model ....' onChange={(e)=>valueAdder(e)}  name="m" value={carmodel} className='outline-none block max-h-12  rounded mb-3 border-1 shadow-md border-gray-300 bg-white px-3 py-2' />
                <input type="number"   ref={(el)=> inputRefs.current[3] = el} required onKeyDown={buttonHandler}  placeholder='Enter Price ....' onChange={(e)=>valueAdder(e)}  name="pr" value={price} className='max-h-12 outline-none block  rounded mb-3 border-1 shadow-md border-gray-300 bg-white px-3 py-2' />
                <button name='bxt'   onClick={ btnStatus? valueAdder:valueUpdaterAdder} className='rounded border-1 px-3 py-1 bg-gray-300'>{btnStatus?` Add Car`:`Update`}</button>
                </div>:null}


        </div>

        <table className='w-[700px] mt-2 border-1 max-h-56 overflow-y-auto' >
          <thead className='border-1'>
          <tr>
          <th className='p-1'>No.</th>
          <th className='p-1 cursor-pointer' id='thyear' onClick={sortByfield} >Year</th>
          <th>Company</th>
          <th>Model</th>
          <th>Price</th>
          <th>Action</th>
          </tr>
          </thead>
           <tbody>
            {cars.length>0? cars.map((element,index)=>(
    
                 <tr key={index}>
                  <td className='text-center p-2'>{element.id}</td>
                   <td className={tdbg?changeBg:`text-center p-2`}>{element.year} </td>
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
                 
            )):null}
            </tbody>
        </table>
        {confirmDelete ? (
            <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-10">
              <div className="w-96 bg-white p-5 rounded-lg shadow-lg border">
                <p className="mb-4 text-gray-800 text-center">
                  Are you sure you want to delete this detail?
                </p>
                <div className="flex gap-5 justify-end">
                  <button
                    name="cancelDelete"
                    className="rounded px-5 h-9 bg-green-500 text-white hover:bg-green-600"
                    onClick={(e) => showDiv(e)}
                  >
                    Cancel
                  </button>
                  <button
                    name="confirmDelete"
                    className="rounded px-5 h-9 bg-red-500 text-white hover:bg-red-600"
                    onClick={() => carRemover(currentIndex)}
                  >
                    Confirm Delete
                  </button>
                </div>
              </div>
            </div>
          ) : null}



        
    </div>
  )
}

export default ObjectUpdate