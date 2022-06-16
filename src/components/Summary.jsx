import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './style.css'

const Summary = () => {
  return (
      <main className='sum-tab'>
          <div className="tab-icon"><FaUserCircle/></div>
          <h3 className="tab-heading">PROFESSIONAL SUMMARY</h3>
          <p className="summary-body">
          User-focused Front End Developer with a pixel perfect eye for design and 
          deep understanding of usability goals. Perfectly marries 
          functional requirements and creative elements to produce 
          optimal interfaces. Skilled at managing time, projects, 
          and resources to accomplish development goals. 
          <br/>
          Expert in Responsive web development, testing, and optimization. 
          Works great with Javascript and Javascript libraries such 
          as React and Nextjs. Making a switch to web3 
          studying the blockchain technology
          </p>
      </main>
  );
};

export default Summary;
