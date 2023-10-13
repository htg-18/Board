// import React ,{useState} from 'react'
// import './modal.css'

// const Modal = () => {
//     const [modalMode, setModalMode] = useState('basic');
//     const handleTabClick = (mode) => {
//         setModalMode(mode);
//       };
//   return (
//     <>
//     <div className='modal-wrapper'></div>
//     <div className='modalContainer'>
//         <p className='newProfile'>Add New Profile</p>
//         <hr className='profileHr'/>
//         <div className='option'>
//            <div
//             className={`BasicDiv ${modalMode === 'basic' ? 'active' : ''}`}
//             onClick={() => handleTabClick('basic')}
//           >
//             <p className="basic">Basic</p>
//             <hr className={`basicHr ${modalMode === 'basic' ? 'blueHr' : ''}`} />
//           </div>
//           <div
//             className={`ContactDiv ${modalMode === 'contact' ? 'active' : ''}`}
//             onClick={() => handleTabClick('contact')}
//           >
//             <p className="contactInfo">Contact</p>
//             <hr className={`contactHr ${modalMode === 'contact' ? 'blueHr' : ''}`} />
//           </div>
//         </div>
//         <div className='basicDisplay'>
//          <div className='nameDiv'>
//           <p>Enter Name*</p>
//           <input placeholder='Eg. John Doe' required/>
//           </div>
//           <div className='emailDiv'>
//           <p>Enter Email*</p>
//           <input placeholder='Eg. John@xyz.com' required type='email'/>
//           </div>
//           <div className='phoneDiv'>
//           <p>Enter Phone*</p>
//           <input placeholder='Eg. 9123456789' required maxLength={10} minLength={10}/>
//           </div>
//         </div>
//         <div className='contactDisplay'>
//           <div className='instaDiv'>
//             <p>Instagram Link<span>(Optional)</span></p>
//             <input placeholder='Eg. ..instagram.com/username'/>
//           </div>
//           <div className='uDiv'>
//             <p>Youtube Link<span>(Optional)</span></p>
//             <input placeholder='Eg. ..youtube.com/username'/>
//           </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Modal
import React, { useState } from 'react';
import './modal.css';

const Modal = () => {
  const [modalMode, setModalMode] = useState('basic');

  const handleTabClick = (mode) => {
    setModalMode(mode);
  };

  return (
    <>
      <div className='modal-wrapper'></div>
      <div className='modalContainer'>
        <p className='newProfile'>Add New Profile</p>
        <hr className='profileHr' />
        <div className='option'>
          <div
            className={`BasicDiv ${modalMode === 'basic' ? 'active' : ''}`}
            onClick={() => handleTabClick('basic')}
          >
            <p className="basic">Basic</p>
            <hr className={`basicHr ${modalMode === 'basic' ? 'blueHr' : ''}`} />
          </div>
          <div
            className={`ContactDiv ${modalMode === 'contact' ? 'active' : ''}`}
            onClick={() => handleTabClick('contact')}
          >
            <p className="contactInfo">Contact</p>
            <hr className={`contactHr ${modalMode === 'contact' ? 'blueHr' : ''}`} />
          </div>
        </div>
        <div className='basicDisplay'>
          {modalMode === 'basic' && (
            <>
              <div className='nameDiv d first'>
                <p className='nameText'>Enter Name*</p>
                <input placeholder='Eg. John Doe' required />
              </div>
              <div className='emailDiv d'>
                <p className='nameText'>Enter Email*</p>
                <input placeholder='Eg. John@xyz.com' required type='email' />
              </div>
              <div className='phoneDiv d'>
                <p className='nameText'>Enter Phone*</p>
                <input placeholder='Eg. 9123456789' required 
                min={1}
                maxLength={10} minLength={10} type='number'/>
              </div>
            </>
          )}
        </div>
        <div className='contactDisplay'>
          {modalMode === 'contact' && (
            <>
              <div className='instaDiv d first'>
                <p className='nameText'>Instagram Link<span className='opt'>(Optional)</span></p>
                <input placeholder='Eg. ..instagram.com/username' />
              </div>
              <div className='uDiv d'>
                <p className='nameText'>Youtube Link<span className='opt'>(Optional)</span></p>
                <input placeholder='Eg. ..youtube.com/username' />
              </div>
            </>
          )}
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Modal;


