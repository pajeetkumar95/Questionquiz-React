import React, { useEffect, useState , } from 'react'
import Home from '../Components/Home'

function Rejister() {

  const [ name , setName] = useState("")
  const [ user , setUser] = useState("")
  const [ email , setEmail] = useState("")
  const [ password , setPassword] = useState("")
  const [ form , setForm] = useState([])
  const [ go , setGo] = useState(true)

function submithandle(e){
  e.preventDefault()
  console.log(name,email,password)
  const details = {
  
    name:name,
    user:user,
    email:email,
    password:password
  }
  setForm([...form, details])


  

  setGo(false)

}
useEffect(()=>{
  localStorage.setItem('details',JSON.stringify(form))
},[form])

if(go){
  return (
    <div className='qrform'>
      <form onSubmit={submithandle}>
      <input type='text' placeholder='Enter Your Full Name'
        onChange={(e) => { setName(e.target.value) }} value={name} autoFocus required></input><br />

        <input type='name' placeholder='Enter Your User Name '
         onChange={(e) => { setUser(e.target.value) }} value={user}  required></input><br />

        <input type='email' placeholder='Enter Your Email'
         onChange={(e) => { setEmail(e.target.value) }} value={email}  required></input><br />

        <input type='password' placeholder='Enter Your Password'
         onChange={(e) => { setPassword(e.target.value) }} value={password} required></input><br />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

else{
  return (
    <Home/>
  )
}
  
}

export default Rejister