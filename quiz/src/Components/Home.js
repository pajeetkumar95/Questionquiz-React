import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const [ loginuser , setLoginuser] = useState()
  const [ loginpassword , setLoginpassword] = useState()

  const navigate = useNavigate()

  function submithandle (e){
    e.preventDefault()
      
    let datastored = JSON.parse(localStorage.getItem('details'))
   const newdata =  datastored.filter((data) => data.name === loginuser && data.password === loginpassword )

  if(newdata){
    alert("welcome")
    navigate("/Selectoption")
  }
  else{
    alert("register first")
  }

  }

  
  return (
    <div className='qhome'>
        <form onSubmit={submithandle}>
            <input type='name' placeholder='Enter User Name'
             onChange={(e)=>{setLoginuser(e.target.value)}} value={loginuser} autoFocus required></input><br/>

            <input type='password' placeholder='Enter Your Password'
             onChange={(e)=>{setLoginpassword(e.target.value)}} value={loginpassword} required></input><br/>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}


export default Home