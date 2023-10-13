import React,{useState} from 'react'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import './main.css'
import Modal from './Modal'

const Main = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='body'>
        <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar}/>
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
                <Home/>
                
                
            </div>
    </div>

  
  )
}

export default Main