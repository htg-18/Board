import React from 'react'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import './main.css'

const Main = () => {
  return (
    <div className='body'>
        <div className='grid-container'>
                <Header/>
                <Home/>
                <Sidebar/>
            </div>
    </div>

  
  )
}

export default Main