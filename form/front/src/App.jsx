import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import {useNavigate}from "react-router-dom"

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
     

  const nishaIderDekho=() =>{
   axios.post("http://localhost:5000/new" ,{
    name,phone,age
   })
   .then((result)=>{
    console.log(result)
    if (result.statusText==="ok") navigate("/");
   })
  }
  return (
    <>
    <form onSubmit= {(e)=>{
      e.preventDefault()
      nishaIderDekho()
    } }>
     <label htmlFor=""> First Name :</label>
     <input type="text" placeholder='Enter your name' value={name}  id='fname'  onChange={(e)=>{setName(e.target.value)}}  />

     <label htmlFor="">phone :</label>
     <input type="phone" placeholder='Enter your name'value={phone} id='phone' onChange={(e)=>{setPhone(e.target.value)}} />

     <label htmlFor="">Age :</label>
     <input type="age" placeholder='Enter your Age' value={age} id='age' onChange={(e)=>{setAge(e.target.value)}}/>
       
       <button className='btn'> submit</button>
    </form>
    </>
  )
}

export default App
