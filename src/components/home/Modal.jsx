

import React, { useState } from 'react';
import './modal.css';

const Modal = ({setUserHome,uid}) => {
  const [modalMode, setModalMode] = useState('basic');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userData, setUserData] = useState(null);

  const handleTabClick = (mode) => {
    setModalMode(mode);
  };
 

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert('Name, Email, and Phone are required!');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits!');
      return;
    }

    setModalMode('contact');
  };

  const handleFinish = async(event) => {
    // Collect user data and close the modal
    event.preventDefault()
    const userData = {
      name,
      email,
      phone,
      instagram,
      youtube,
    };
    setUserHome(userData)
    setUserData(userData);
    setIsModalOpen(false);
    const res=await fetch("https://my-project-318dc-default-rtdb.firebaseio.com/userDataRecord.json",
    {
      method:"POST",
      headers :{
        "Content-Type": "application/json" ,
      },
      body:JSON.stringify({
        uid,
        name,
        email,
        phone,
        instagram,
        youtube,
      })
    }
    )
    if(res){
      console.log("Data Scored")
      setUserData(null)
    }else{

    }
  };

  const handleBack = () => {
    setModalMode('basic');
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div className='modal-wrapper'></div>
          <div className='modalContainer'>
            <p className='newProfile'>Add New Profile</p>
            <hr className='profileHr' />
            <form onSubmit={submitHandler}>
              <div className='option'>
                <div
                  className={`BasicDiv ${modalMode === 'basic' ? 'active' : ''}`}
                >
                  <p className="basic">Basic</p>
                  <hr
                    className={`basicHr ${modalMode === 'basic' ? 'blueHr' : ''}`}
                  />
                </div>
                <div
                  className={`ContactDiv ${
                    modalMode === 'contact' ? 'active' : ''
                  }`}
                >
                  <p className="contactInfo">Contact</p>
                  <hr
                    className={`contactHr ${
                      modalMode === 'contact' ? 'blueHr' : ''
                    }`}
                  />
                </div>
              </div>
              <div className='basicDisplay'>
                {modalMode === 'basic' && (
                  <>
                    <div className='nameDiv d first'>
                      <p className='nameText'>Enter Name*</p>
                      <input
                        placeholder='Eg. John Doe'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='emailDiv d'>
                      <p className='nameText'>Enter Email*</p>
                      <input
                        placeholder='Eg. John@xyz.com'
                        required
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='phoneDiv d'>
                      <p className='nameText'>Enter Phone*</p>
                      <input
                        placeholder='Eg. 9123456789'
                        required
                        pattern="\d{10}" // Exactly 10 digits
                        title="Phone number must be exactly 10 digits"
                        type='tel' // Set input type to "tel" for better phone input support
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="buttons">
                      <button type="submit" className='next'>Next</button>
                    </div>
                  </>
                )}
              </div>
              <div className='contactDisplay'>
                {modalMode === 'contact' && (
                  <>
                    <div className='instaDiv d first'>
                      <p className='nameText'>
                        Instagram Link<span className='opt'>(Optional)</span>
                      </p>
                      <input
                        placeholder='Eg. ..instagram.com/username'
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                      />
                    </div>
                    <div className='uDiv d'>
                      <p className='nameText'>
                        Youtube Link<span className='opt'>(Optional)</span>
                      </p>
                      <input
                        placeholder='Eg. ..youtube.com/username'
                        value={youtube}
                        onChange={(e) => setYoutube(e.target.value)}
                      />
                    </div>
                    <div className="buttons">
                      <button onClick={handleFinish} className='next'>Finish</button>
                      <button onClick={handleBack} className='back'>Back</button>
                      
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
