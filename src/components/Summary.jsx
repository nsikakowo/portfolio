import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './style.css'

const Summary = () => {
  return (
      <main className='sum-tab'>
          <div className="tab-icon"><FaUserCircle/></div>
          <h3 className="tab-heading">PROFESSIONAL SUMMARY</h3>
          <p className="summary-body">
         Experienced frontend engineer with a strong background of over 9years in the computer software industry. Skilled in problem-solving using HTML, CSS, TailwindCSS, JavaScript, React, NextJs, Shopify, WordPress and other Content management systems. Currently exploring the React Native and Web3 pathways.

Passionate about teamwork and believe in the collective growth of the team. Committed to being a valuable contributor to any project, always willing to lend a hand to fellow team members when needed.

Experienced in collaborating with scrum teams, participating in sprint planning, backlog refinement, and other scrum ceremonies.
          </p>
      </main>
  );
};

export default Summary;
