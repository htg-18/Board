import React,{useEffect,useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Signin from './Signin'
import './AuthDetails.css'
import Main from '../home/Main'

const AuthDetails = () => {
    const [authUser,setAuthUser]=useState(null)
    useEffect(()=>{
      const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user)
        }else{
            setAuthUser(null)
        }
      })
    },[])
  return (
    <div className='AuthDetails'>{authUser!==null?<Main/>:<Signin/>}</div>
  )
}

export default AuthDetails