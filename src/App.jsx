


import {  createContext, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';


export const CreateContext=createContext()
export const AnotherContext=createContext()


function App() {
  const [another,setAnother]=useState(111)


 const [count,setCount]=useState(0);

  

  return (
    <div>
     
    <AnotherContext.Provider value={[another,setAnother]}>
    <CreateContext.Provider value={[count,setCount]}>
     <Home/>
     <h1>{count}</h1>
     <button onClick={()=>setCount(count+1)}>Count:</button>
      </CreateContext.Provider>
    </AnotherContext.Provider>
    
    
      
    </div>
  )
}

export default App
