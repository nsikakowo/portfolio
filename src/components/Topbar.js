import React from 'react';
import pdf from './NsikakOwo.pdf'
import logo from '../logo.png'
import './style.css'

const Topbar = () => {
  return (
      <main className='topbar'>
          <h1 className="logo">
             <img src={logo} alt="logo" width='170px'/>
          </h1>
          <div className="download-btn" ><a href={pdf} target='_blank' rel='noreferrer'>
              <button>Download My Full Resume</button></a>
          </div>
      </main>
  );
};

export default Topbar;
