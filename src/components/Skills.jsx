import React from 'react';
import { FaStar } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';

import './style.css'

let skillArr = [
    'Javascript',
    'Reactjs',
    'CSS',
    "TailwindCSS",
    'Nextjs',
    'Web3',
    'Solidity',
    'NFTs',
    'Wordpress',

    'Shopify',
    'Digital Marketing',
    'Graphics Design',

]

const Skill =({skils})=> {
    return (
        <div className="skill">
            <span><IoMdCheckmark/></span>
            <p>{skils}</p>
        </div>
    )
}


const Skills = () => {
  return (
      <main className='skill-tab'>
          <div className="tab-icon"><FaStar/></div>
          <h3 className="tab-heading">Skills</h3>
          <section className="skills-list">
              {skillArr.map((item, index)=> {
                  return (
                      <Skill skils={item} key={index}/>
                  )
              })}
          </section>
      </main>
  );
};

export default Skills;
