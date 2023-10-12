import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"

const Signup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signUp=(e)=>{
      e.preventDefault()
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log(userCredential)
      }).catch((error)=>{console.log(error)})
    }
  return (
    <div className='signin-container'>
       <form onSubmit={signUp}>
         <h1>SignUp</h1>
         <input 
         type='email' 
         placeholder='Email' 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}   
         />
         <input 
         type='password' 
         placeholder='Password' 
         value={password}
         onChange={(e)=>setPassword(e.target.value)}  
         />
         <button className='Submit' type="submit">SignUp</button>
       </form>
    </div>
  )
}

export default Signup