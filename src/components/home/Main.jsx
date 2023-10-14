import React,{useState} from 'react'
import Header from './Header'
import Home from './Home'
import Sidebar from './Sidebar'
import './main.css'
import Modal from './Modal'

const Main = ({uid}) => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  console.log(uid)
  return (
    <div className='body'>
        <div className='grid-container'>
                <Header OpenSidebar={OpenSidebar}/>
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
                <Home uid={uid}/>
                
                
            </div>
    </div>

  
  )
}

export default Main