import { useEffect, useState } from "react"

function App() {
  //type for the fruits
 type fruitType = {id:number,name:string}

 // initialisation of the fruit list
  const [list,setList]=useState<fruitType[]>([
    {id:1,name:"anana"},
    {id:2,name:"banane"},
    {id:3,name:"orange"}
  ])
// state control of the fruit field
const [fruit,setFruit] =useState<string>("")

// function of delete one fruit 
 const deleteFruit=(id:number)=>{
   const newList = list.filter(item=>item.id!==id)
   setList(newList)
 }
 // function of add one fruit
 const addFruit = (fruit:string)=>{
  if(fruit.length!==0) {
    const isexist = list.find(item=>item.name===fruit)
    if(isexist===undefined){
      setList(v=>[...v,{id:v.length+1,name:fruit}]) 
      setFruit('') 
    }else{
      setFruit('') 
       alert('this fruit is already in the list')
    }
   
  }else alert('add a fruit!')
 
 } 
 // add a fruit with the keyboard event
 useEffect(()=>{
  const addFruitWihtKeyBoard =(e:KeyboardEvent)=>{
    if(e.key==="Enter"){
     addFruit(fruit)
     
    }
     
 }
    window.addEventListener("keypress",addFruitWihtKeyBoard)

    //clean event
    return ()=>{
      window.removeEventListener("keypress",addFruitWihtKeyBoard)
    }
 })
 //control field change
 const handleChange = (fruit:string)=>{
    setFruit(fruit)
 }
  return (
    <main className="container">
       <section className="row mt-5">
           
           <div className="col-12">
            <h4 className="fw-bold">fruit list</h4>
            <ul>
              {
                // render fruit liste
                list.map((item)=>{
                  return <li key={item.id}>
                      {item.name} <button onClick={()=>{deleteFruit(item.id)}} className="btn btn-close"></button>
                  </li>
                })
              }
            </ul>
           </div>
           <div className="col-12">
             <input autoFocus value={fruit} onChange={(e)=>{handleChange(e.target.value)}} type="text" className="form-control" placeholder="add a fruit" />
             <button onClick={()=>{addFruit(fruit)}} className="btn btn-primary mt-2">sauve</button>
           </div>
       </section>
    </main>
  )
}

export default App