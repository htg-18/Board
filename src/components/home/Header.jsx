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
            <BsJustify className='' onClick={OpenSidebar}/>
        </div>
        <div className='dash'>
            Dashboard
        </div>
        <div>
        {/* <div className='header-left'>
            <BsSearch  className='icon'/>
        </div> */}
        <div className='header-right'>
           {/* <input placeholder='Search...'/>
            <BsFillBellFill className='icon'/> */}
            {/* <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
            {/* <Input
          placeholder='Search...'
          className='search'
          startAdornment={
            <InputAdornment position="end" className='search-icon'>
              <Search className='sch' />
            </InputAdornment>
          }
        /> */}
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