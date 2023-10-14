import { AccountCircle, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { Input, InputAdornment } from '@mui/material';

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='ic' onClick={OpenSidebar}/>
        </div>
        <div className='dash'>
            Dashboard
        </div>
        <div>
        <div className='header-right'>
         <div className='searchDiv'>
            <input placeholder='Search...' className='search'/>
            <Search className='sch' />
         </div>
         <Notifications className='Headericon'/>
         <AccountCircle className='Headericon'/>
        </div>
        </div>
    </header>
  )
}

export default Header