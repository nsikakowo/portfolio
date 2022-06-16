import React from 'react';
import { MdSchool } from 'react-icons/md';

import './style.css'

let eduArr = [
    {
        title:'Google Africa Developer Training Program ',
        degree: 'Google',
        start_date: 2022,
        // end_date: 2018,
    },
    {
        title:'React JS- Complete Guide for Frontend Web Development ',
        degree: 'Udemy',
        start_date: 2021,
        // end_date: 2018,
    },
    {
        title:'The complete web developer in 2021: Zero to Mastery ',
        degree: 'Udemy',
        start_date: 2021,
        // end_date: 2018,
    },
    {
        title:'Javascript Essentials',
        degree: 'Udemy',
        start_date: 2019,
        // end_date: 2018,
    },
    {
        title:'Digital Marketing',
        degree: 'Google',
        start_date: 2019,
        // end_date: 2018,
    },
    {
        title:'Design and prototype in Adobe xD',
        degree: 'Udemy',
        start_date: 2019,
        // end_date: 2018,
    },
    {
        title:'University of Uyo',
        degree: 'Bachelor of Science (Computer Science)',
        start_date: '2010 -',
        end_date: 2018,
    },
    {
        title:'St Marys Science College',
        degree: 'WAEC/NECO',
        start_date: '2004 -',
        end_date: 2007,
    },
    {
        title:'Christian Secondary Commercial School',
        degree: 'Junior WAEC',
        start_date: '2001 -',
        end_date: 2004,
    },
    {
        title:'Jevics International Nursery/Primary SChool',
        degree: 'First SChool Leaving Certificate',
        start_date: '1994 -',
        end_date: 2001,
    },
];

const Certificates = ({school, cert, start, end}) =>{
    return (
        <div className='cert-box'>
            <div className="cert-title">{school}</div>
            <p className='cert-sch'>{cert}</p>
            <p className='cert-date'>{start}  {end}</p>
        </div>
    )
}

const Certifications = () => {
  return (
      <main className='cert-tab'>
           <div className="tab-icon"><MdSchool/></div>
          <h3 className="tab-heading">education/certifications</h3>
          <section className="cert-list">
               {eduArr.map((edu, index)=> {
                  return ( <Certificates 
                    key={index}
                        start={edu.start_date}
                        end ={edu.end_date}
                        school={edu.title}
                        cert= {edu.degree}
                   />)
               })}
          </section>
      </main>
  );
};

export default Certifications;
