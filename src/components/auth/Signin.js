import React,{useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import "./Signin.css"
import { GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
// import google from '../../../public/google.jpg'
import {GitHub,Twitter,LinkedIn,Facebook} from '@mui/icons-material';

const Signin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const signIn=(e)=>{
      e.preventDefault()
      signInWithEmailAndPassword(auth,email,password)
      .then((userCredential)=>{
        console.log(userCredential)
      }).catch((error)=>{console.log(error)})
    }
    const provider=new GoogleAuthProvider()
    const handleGoogle=async(e)=>{
      try{
        const provider=await new GoogleAuthProvider()
        return signInWithPopup(auth,provider)
      }catch(error){
        console.log(error)
      }
        
    }
  return (
    <div className='signin-container'>
       <div className='sideDiv'>
          <div className='Logo'>
            LOGO
          </div>
          <div className='board'>
            Board.
          </div>
          <div className='icons'>
            <GitHub className='github' fontSize='large'/>
            <Twitter className='github' fontSize='large'/>
            <LinkedIn className='github' fontSize='large'/>
          <Facebook className='github' fontSize='large'/>
          </div>
       </div>
       <div className='formDiv'>
       <form onSubmit={signIn} className='signinForm'>
         <h1>SignIn</h1>
         <p className='text'>Sign in to your account</p>
         <div className='buttons'>
            <button className='google' onClick={handleGoogle}>
            <img src='/google.jpg' alt="Google Logo" className='image'/>
             <span className='p'>Sign in With Google</span>
            </button>
            <button className='apple' onClick={handleGoogle}>
            <img src='/apple.jpg' className='image'/>
             <span className='p'>Sign in With Apple</span>
            </button>
         </div>
         
         <div className='whiteDiv'>
           
            <p className='parae'>Email address</p>
                <input 
                type='email' 
                className='email'
                placeholder='Email' 
                value={email}
                required
                onChange={(e)=>setEmail(e.target.value)}   
                />
         
          
            <p className='parap'>Password</p>
            <input 
            type='password' 
            className='password'
            placeholder='Password' 
            value={password}
            required
            onChange={(e)=>setPassword(e.target.value)}  
            />
             <p className='forgot'>Forgot password?</p>
            
            <button className='Submit' type="submit">SignIn</button>
            
         </div>
         <p className='signup'>Dont have an account?  <span className='register'>Register Here</span></p>
       </form>
       
       </div>
       
    </div>
  )
}

export default Signin