import React,{useEffect,useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Signin from './Signin'
import './AuthDetails.css'
import Main from '../home/Main'

const AuthDetails = () => {
    const [authUser,setAuthUser]=useState(null)
    const [uid,SetUid]=useState('')
    useEffect(()=>{
      const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
          // console.log(user)
          SetUid(user.uid)
            setAuthUser(user.uid)
        }else{
            setAuthUser(null)
        }
      })
    },[])
  return (
    <>
    
    <div className='AuthDetails'>{authUser!==null?<Main uid={uid}/>:<Signin/>}</div>
    </>
    
  )
}

export default AuthDetails