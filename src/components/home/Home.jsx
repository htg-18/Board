import React, { useState,useEffect } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import Chart from './Chart';
import { Add, AddCircleOutline, AttachMoney, EventNote, FiberManualRecord, Group, Instagram, MailOutline, Money, PlayCircle, PlayCircleOutline, Recommend, Sell, ThumbsUpDown, WhatsApp, YouTube } from '@mui/icons-material';
import Modal from './Modal';
import { getDatabase, ref, child, get } from "firebase/database";
import { db } from '../../firebase';
// import { uid } from 'uid';
import { set, onValue, remove, update } from "firebase/database";





function Home({uid}) {
    const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
     
      const [userHome,setUserHome]=useState('')
      const [isVisible,setIsVisible]=useState(false)  
      const openModal = () => {
        setIsVisible(true);
      };
    
      // Function to close the modal
      const closeModal = () => {
        setIsVisible(false);
      };
    
      
      useEffect(() => {
        // Log the userData when it changes
        if (userHome) {
          console.log('Received UserData:', userHome);
        }
      }, [userHome]);
      // Add an event listener to handle clicks outside the modal
      useEffect(() => {
        const handleOutsideClick = (e) => {
          if (isVisible && e.target.classList.contains('modal-wrapper')) {
            closeModal();
          }
        };
    
        if (isVisible) {
          document.addEventListener('click', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [isVisible]);
    
    const data = [
        {
          name: 'Week 1',
          uv: 500,
          pv: 400,
          amt: 2400,
        },
        {
          name: 'Week 2',
          uv: 350,
          pv: 450,
          amt: 2210,
        },
        {
          name: 'Week 3',
          uv: 200,
          pv: 300,
          amt: 2290,
        },
        {
          name:  'Week 4',
          uv: 400,
          pv: 350,
          amt: 2000,
        },
      ];
     

  return (
    <main className='main-container' >
        {/* <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div> */}

        <div className='main-cards'>
            <div className='card'>
            <div className='iconDiv'>
            <AttachMoney className='card_icon' id="icon1"/>
            </div>
            
                <div className='card-inner'>
                    <p class="card_inner_text">Total Revenues</p>
                    <div className='twop'>
                      <p>$2,129,430</p>
                      <p className="percenti">+2.5%</p>
                    </div>
                   
                </div>
               
            </div>
            <div className='card'>
            <div className='iconDiv'>
            <Sell className='card_icon' id="icon2"/>
            </div>
            
                <div className='card-inner'>
                    <p class="card_inner_text">Total Transactions</p>
                    <div className='twop'>
                      <p>1,520</p>
                      <p className="percenti">+1.7%</p>
                    </div>
                    
                </div>
               
            </div>
            <div className='card'>
            <div className='iconDiv'>
            <Recommend className='card_icon' id="icon3"/>
            </div>
            
                <div className='card-inner'>
                    <p class="card_inner_text">Total Likes</p>
                    <div className='twop'>
                      <p>9,721</p>
                      <p className="percenti">+1.4%</p>
                    </div>
                   
                </div>
              
            </div>
            <div className='card'>
            <div className='iconDiv'>
            <Group className='card_icon' id='icon4'/>
            </div>
               
                <div className='card-inner'>
                    <p className="card_inner_text">Total Users</p>
                    <div className='twop'>
                      <p>9,721</p>
                      <p className="percenti">+4.2%</p>
                    </div>
                    
                </div>
               
            </div>
        </div>

        <div className='charts'>
           <div className='innerCharts'>
             <div className='info'>
               <p className='Act'>Activities</p>
               <p className='date'>
                May-June 2021
               </p>
             </div>
             <div className='tags'>
               <div className='guest'>
                 <FiberManualRecord className='guestIcon' fontSize='small'/>
                 Guest
               </div>
               <div className='user'>
                 <FiberManualRecord className='userIcon' fontSize='small'/>
                 User
               </div>
             </div>
           </div>
            <ResponsiveContainer width="100%" height="100%" className="barChart">
            <BarChart
            width={200}
            height={200}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="0"  />
                {/* <XAxis dataKey="name" tick={false} /> */}
                {/* <YAxis /> */}
                <XAxis dataKey="name" axisLine={false}  />
                <YAxis
                    axisLine={false} // Set axisLine to false to remove the Y-axis lines
                    tickLine={false} // Set tickLine to false to remove tick lines
                />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="pv" fill="#98D89E" barSize={38}/>
                <Bar dataKey="uv" fill="#EE8484" barSize={38}/>
                </BarChart>
            </ResponsiveContainer>

           
        

        </div>
        <div className='bottomDiv'>
        <div className='pieChart'>
          <div className='innerPie'>
            <p className='top'>Top Products</p>
            <p className='newDate'>May-June 2021</p>
          </div>
          <div className='PieDiv'>
            <Chart className="mainGraph"/>
            <div className='detailDiv'>
                <div className='comp3'>
                 <FiberManualRecord className='tees'/>
                 <div className='comp2'>
                   <p className='product'>Basic Tees</p>
                   <p className='percent'>
                    55%
                   </p>
                 </div>
                </div>
                <div className='comp3'>
                 <FiberManualRecord className='pants'/>
                 <div className='comp2'>
                   <p className='product'>Custom Short Pants</p>
                   <p className='percent'>
                    31%
                   </p>
                 </div>
                </div>
                <div className='comp3'>
                 <FiberManualRecord className='hoodies'/>
                 <div className='comp2'>
                   <p className='product'>Super Hoodies</p>
                   <p className='percent'>
                    14%
                   </p>
                 </div>
                </div>
            </div>
          </div>
          
        </div>
         
         <div className='Add' onClick={()=>{setIsVisible(true)}}>
            {!userHome &&<> <div className='plusDiv'>
              <Add className='plus' fontSize='large'/>
            </div>
            <p className='addProfile'>Add Profile</p>
            
         </> }
         {
          userHome && <>
            <div className='userHome'>
              <p className='userName'>{userHome.name}</p>
              <div className='eandne'>
              <div className='essential'>
                <div className='phoneNo'>
                  <div className='wDiv'> <WhatsApp className='wIcon' fontSize='medium'/></div>
                  
                  {userHome.phone}
                </div>
                <div className='emailAdd'>
                  <div className='eDiv'> <MailOutline className='eIcon'/></div>
                 
                  {userHome.email}
                </div>
              </div>
              <div className='non'>
                <div className='instagram'>
                  <div className='iDiv'><Instagram className='iIcon'/></div>
                    
                    {userHome.instagram?userHome.instagram:"-"}
                  </div>
                <div className='youtube'>
                   <div className='yDiv'><PlayCircleOutline className='yIcon'/></div>
                   
                   {userHome.youtube?userHome.youtube:"-"}
                </div>
                
              </div>
              </div>
            </div>
          </>
         }
         </div> 
        </div>
        {isVisible && <Modal setUserHome={setUserHome} uid={uid}/>}
    </main>
  )
}

export default Home