import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

import './style.css'

let workArr = [
    {
        startdate: 'Dec,2022',
        enddate: 'Present',
        workplace: 'Senior Frontend Developer',
        workpost: 'Clafiya',
        location: 'Lagos',
        bullet:[
            'worked on the Frontend of the company product',
            'Developed the frontend with Nextjs and VueJs',
            'Provided support with maintenance and upkeep of front end applications.',
        ]
    },
     {
        startdate: 'Jul,2022',
        enddate: 'Present',
        workplace: 'Senior Frontend Developer',
        workpost: 'BLK Labs',
        location: 'Lagos',
        bullet:[
            'worked on the Frontend of the company product',
            'Developed the frontend with Nextjs',
            'Provided support with maintenance and upkeep of front end applications.',
        ]
    },
      {
        startdate: 'March,2022',
        enddate: 'May, 2022',
        workplace: 'GenioPay',
        workpost: 'Frontend developer (Remote)',
        location: 'United Kingdom',
        bullet:[
            'worked on the Frontend of the company\'s flagship product dashboard',
            'Developed the frontend with Reactjs',
            'Provided support with maintenance and upkeep of front end applications.',
            'Worked on the several modules in relation to the company\'s fintech product'
        ]
    },
    {
        startdate: 'Dec,2021',
        enddate: 'Jul 2022',
        workplace: 'Freelance Software Developer',
        workpost: 'Freelance',
        location: 'Lagos',
        bullet:[
            'worked on the Frontend of the Afrodriods NFT Drone drop which was integrated with the smart contract',
            'Developed the frontend with Reactjs',
            'Provided support with maintenance and upkeep of front end applications.',
            'Designed and developed the www.everythingnice.me platform using Shopify',
            'Worked on the updated version of the Skillup Africa Platform which i previoulsy worked on while with univelcity'
        ]
    },
  
    {
        startdate: 'Nov, 2020',
        enddate: 'Nov, 2021',
        workplace: 'AFTJ Digitals Solutions',
        workpost: 'Frontend Developer (Remote)',
        location: 'Atlanta Georgia, USA',
        bullet:[
            'Led the frontend team in developing the 1Automech.com platform',
            'Worked specifically on the geolocation feature which shows the locations of the mechanics searched for on the google map',
            'Solely developed the frontend feature for the 1automech.com marketplace where spare-parts dealers sale their old/new products',
            'Developed the platform\'s user dashboard where users can tract their activities and appointments',
            'Single handedly developed the frontend for the company\'s commercial product (aftjchurch.com)',
            'Worked with scrum team to refine the jiraboard and setup meeting'
        ]
    },
    {
        startdate: 'Jul, 2020',
        enddate: 'Sep, 2020',
        workplace: 'Univelcity',
        workpost: 'Frontend Developer',
        location: 'Lagos',
        bullet:[
            'Worked on the Frontend of the SkillUp Africa platform',
            'Conducted refinements with the design team to create a better user experience',
            'Worked closely with the backend team to refactor the APIs and how the Json is presented',
        ]
    },
    {
        startdate: 'Jul, 2012',
        enddate: 'Nov, 2020',
        workplace: 'Byteloops',
        workpost: 'Web Developer/Graphics Designer',
        location: 'Lagos/Uyo',
        bullet:[
            'Setup and led the business\'s daily operations',
            'Designed and developed over 102 wordpress websites that span across the world',
            'Led a team of developers in creating a number of websites for Philux Group.',
            'Refined and upgraded websites for clients'
        ]
    },
    
    {
        startdate: 'Jun, 2009',
        enddate: 'Sep, 2012',
        workplace: 'AtlanticBet',
        workpost: 'Network Support',
        location: 'Akwa Ibom',
        bullet:[
            'Resolved networking and connectivity issues remotely via telephone and online chat portals',
            'Improved system performance with routine maintenance and hardware upgrades.',
            'Managed user access, setting permissions, investigating issues, and restricting unauthorized personnel',
        ]
    },
]

const Work =({start_date, end_date, work_post, locate, work_place, bullets})=>{
   return (
       <div className='work-list'>
           <div className="work-title">
               <div className="work-date">
                   {start_date} - {end_date}
               </div>
               <div className="work-place">
                   {work_place}
               </div>
               <div className="work-post">
                   {work_post}
               </div>
               <div className="work-post locate">
                   {locate}
               </div>
           </div>
           <div className="work-points">

           <div className="work-title-left">
               <div className="work-date">
               {start_date} - {end_date}
               </div>
               <div className="work-place">
               {work_place}
               </div>
               <div className="work-post">
               {work_post}
               </div>
               <div className="work-post locate">
               {locate}
               </div>
           </div>

           <ul className="work-ul">
                {bullets}
           </ul>
           </div>
       </div>
   )
}

const Experience = () => {
  return (
      <main className='exp-tab'>
          <div className="tab-icon"><FaBriefcase/></div>
          <h3 className="tab-heading">Experience</h3>
          <section className="work">
                {workArr.map((item, index)=> (
                    <Work key = {index} 
                    start_date={item.startdate}
                    end_date={item.enddate}
                    work_place={item.workplace}
                    work_post={item.workpost}
                    locate = {item.location}
                    bullets= {item.bullet.map((story, index) => {
                        return <li key={index}> {story} </li>
                    })}
                    />
                ))}
          </section>
      </main>
  );
};

export default Experience;
