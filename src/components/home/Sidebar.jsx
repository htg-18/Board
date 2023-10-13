import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import {AccountCircle, DonutSmall,EventNote,LocalOffer, Settings} from '@mui/icons-material';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            {/* <div className='sidebar-brand'>
                 Board.
            </div> */}
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item title'>
              Board.
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='iconref'>
                    {/* <BsGrid1X2Fill className='icon'/>  */}
                    <DonutSmall className='icon'/>
                    Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='iconref'>
                    {/* <BsFillArchiveFill className='icon'/>  */}
                    <LocalOffer className='icon'/>
                    Transaction
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='iconref'>
                    <EventNote className='icon'/> Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='iconref'>
                    <AccountCircle className='icon'/> Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='iconref'>
                    <Settings className='icon'/> Settings
                </a>
            </li>
            <li className='sidebar-list-item help'>
                
                    Help
                
            </li>
            <li className='sidebar-list-item contact'>
               
                   Contact Us
               
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
