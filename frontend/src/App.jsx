// import FormComponent from './components/FormComponent'
// import ListComponent from './components/ListComponent'

// import React, { useState } from 'react'
// import Button,{HoverButton} from './components/Button'


import React from "react";
import Counter from "./components/Counter";
import SecondsCounter from "./components/SecondsCounter";
import Syncronus from "./components/Syncronus";
import ObjectUpdate from "./components/ObjectUpdate";
import ListItemAdd from "./components/ListItemAdd";
import Table from "./components/Table";
import UseEffectTut from "./components/UseEffectTut";
import Crausal from "./components/Crausal";

function App(){
   let columns = ["No",	"Year"	,"Company"	,"Model"	,"Price" ,	"Action"]
   let rowData =  [
      { No: 1, Year: 2020, Company: "Toyota", Model: "Camry", Price: 25000, Action: "View" },
      { No: 2, Year: 2021, Company: "Honda", Model: "Civic", Price: 22000, Action: "View" },
      { No: 3, Year: 2019, Company: "Ford", Model: "Mustang", Price: 30000, Action: "View" },
      { No: 4, Year: 2022, Company: "BMW", Model: "X5", Price: 55000, Action: "View" },
      { No: 5, Year: 2018, Company: "Mercedes", Model: "C-Class", Price: 40000, Action: "View" },
      { No: 6, Year: 2023, Company: "Tesla", Model: "Model 3", Price: 45000, Action: "View" },
      { No: 7, Year: 2020, Company: "Audi", Model: "A4", Price: 35000, Action: "View" },
      { No: 8, Year: 2017, Company: "Nissan", Model: "Altima", Price: 20000, Action: "View" },
      { No: 9, Year: 2021, Company: "Chevrolet", Model: "Malibu", Price: 27000, Action: "View" },
      { No: 10, Year: 2022, Company: "Hyundai", Model: "Elantra", Price: 21000, Action: "View" }
    ];

    let actions = [
      <div className="justify-center items-center flex">
       <span className='flex gap-1 text-center'>
      <span className=' p-1 bg-red-600 rounded cursor-pointer' onClick={()=>delDiv(element.id)}>🗑️</span>
      <span className=' p-1 rounded bg-green-400 cursor-pointer' onClick={()=>valueUpdater(element.id,index)} >✒️</span>

      <span id="up" className=' p-1 bg-blue-400 rounded cursor-pointer' onClick={(e)=>UpDownPosition(e,index)} >🔼</span>
      <span  id="down" className=' p-1 rounded bg-blue-400 cursor-pointer' onClick={(e)=>UpDownPosition(e,index)}>🔽</span>
      </span>
      </div>

    ]
    
    rowData.map((element)=> element.Action = actions)
    
   return(
     <div className="flex items-center justify-center">
        {/* <Counter/> */}
        {/* <SecondsCounter/> */}
        {/* <Syncronus/> */}
        <ObjectUpdate/>
        {/* <Table th={columns} td={rowData} /> */}
        {/* <ListItemAdd/> */}
        {/* <UseEffectTut/> */}
        {/* <Crausal/> */}
     </div>
   )
}

export default App;

// function App() {

//   let [btnName,setbtnName] = useState("Default")
//   const alertSPecific = (e)=>{
//     console.log(e);
//     let BtnName = prompt("Change Button Name")
//     e
//     setbtnName(BtnName)   
//    }

//   return (
//     <div>
//       <Button/>
//       <HoverButton name = "submitted" text="Submitted"/>
//       <HoverButton name = "submitted" text={btnName} onClickFunction={alertSPecific}/>
//     </div>
//   )
// }

// export default App



// function App() {
//   const fighters = [
//     { name: "Khabib", weight: 155, winning_streak: 29 },
//     { name: "Conor", weight: 151, winning_streak: 22 },
//     { name: "Islam", weight: 133, winning_streak: 13 },
//     { name: "Dustin", weight: 185, winning_streak: 29 },
//     { name: "Tony", weight: 195, winning_streak: 12 },
//     { name: "Holloway", weight: 115, winning_streak: 13 }
//    ]
//     const fightersOfWwe = [
//       { name: "John Cena", weight: 251, winning_streak: 55 },
//       { name: "The Undertaker", weight: 309, winning_streak: 80 },
//       { name: "Stone Cold Steve Austin", weight: 252, winning_streak: 45 },
//       { name: "The Rock", weight: 260, winning_streak: 50 },
//       { name: "Triple H", weight: 255, winning_streak: 48 },
//       { name: "Roman Reigns", weight: 265, winning_streak: 70 },
//       { name: "Brock Lesnar", weight: 286, winning_streak: 60 },
//       { name: "Randy Orton", weight: 250, winning_streak: 58 },
//       { name: "Edge", weight: 241, winning_streak: 40 },
//       { name: "Rey Mysterio", weight: 175, winning_streak: 35 }
//   ]

//    const greaterthan150 = fighters.filter((element) => element.weight>150).map((element,index)=><li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-100 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)
//    const lesserthan150 = fighters.filter((element) => element.weight<150).map((element,index)=><li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-100 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)
//    const fightersOfWweKey = fightersOfWwe.filter((element) => element.weight>150).map((element,index)=><li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-100 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)
//    const fighterswithMoreWWeTitles = fightersOfWwe.sort((a,b)=> b.winning_streak - a.winning_streak ).map((element,index)=><li key={index} className='bg-black px-4 py-2 mb-2 rounded text-white w-100 m-1'>{element.name} ~ {element.weight} ~ {element.winning_streak} </li>)
//   return (
//     <div>
//       <ListComponent items = {greaterthan150} category = "Heavy Weight" />
//       <ListComponent items = {lesserthan150} category = "Light Weight" />
//       <ListComponent items = {fightersOfWweKey} category = {["All Fighters"]} />
//       <ListComponent items = {fighterswithMoreWWeTitles} category = "Wwe Fighters with Most Title" />
      
//     </div>
//   )
// }

// export default App