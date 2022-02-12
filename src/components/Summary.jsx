import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './style.css'

const Summary = () => {
  return (
      <main className='sum-tab'>
          <div className="tab-icon"><FaUserCircle/></div>
          <h3 className="tab-heading">PROFESSIONAL SUMMARY</h3>
          <p className="summary-body">
          User-focused Front End Developer with eye for design and 
          deep understanding of usability goals. Perfectly marries 
          functional requirements and creative elements to produce 
          optimal interfaces. Skilled at managing time, projects, 
          and resources to accomplish development goals. Expert in 
          in Responsive web development, testing, and optimization. 
          Works great with Javascript libraries and frameworks such 
          as Reactjs, Nextjs and nodejs. Making a switch to web3 
          studying the blockchain technology
          </p>
      </main>
  );
};

export default Summary;
