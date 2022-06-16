import React from 'react'
import { BsBriefcase } from 'react-icons/bs';
import ethshare from '../assets/ethshare.png'
import nota from '../assets/nota.png'
import nftstat from '../assets/nftstat.png'
import kanja from '../assets/kanja.png'
import church from '../assets/church.png'
import bot from '../assets/bot.png'

const projectList = [
    {
        id:1,
        title:"ETH Sharepoint",
        desc:"A web3 DApp for sending Ethereum around the blockchain",
        image:ethshare,
        link:"https://ethsharepoint.com/",
        stack:["React", "TailwindCSS", "Ethers"]
    },
    {
        id:2,
        title:"NFT Stat Finder",
        desc:"A web3 DApp for checking market statistics or any NFT project on the Ethereum chain",
        image:nftstat,
        link:"https://nftstats.netlify.app/",
        stack:["React", "TailwindCSS", "Ethers", 'Opensea API']
    },
    {
        id:3,
        title:"NOTA FEST",
        desc:"An events website were user can make seat reservations and print out a QR code for access",
        image:nota,
        link:"https://notafest.netlify.app/",
        stack:["React", "TailwindCSS", "React-Hook-Form"]
    },
    {
        id:4,
        title:"Church",
        desc:"A complete church management system for churches and charity organisations",
        image:church,
        link:"https://happy-brahmagupta-f04dbe.netlify.app/",
        stack:["React", "TailwindCSS", "Ethers"]
    },
    {
        id:5,
        title:"BotFarm",
        desc:"A NFT minting template for NFT art project currently on sale on opensea",
        image:bot,
        link:"https://botfarmowo.netlify.app/",
        stack:["React", "Vanilla CSS", "Ethers"]
    },
    {
        id:6,
        title:"Kanja",
        desc:"A NFT minting template for NFT art project currently on sale on opensea",
        image:kanja,
        link:"https://starlit-gingersnap-e417e6.netlify.app/",
        stack:["React", "Vanilla CSS", "Ethers"]
    },
]

const Project =({title, description, image, stack, link})=>{
    return(
        <div className='project'>
            <div className='project-img'>
                <img src={image} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {stack}
                

            </ul>
            <a href={link} target='_blank' rel='noreferrer' >Open Project</a>
    </div>
    )
}


const Projects = () => {
  return (
    <main className='skill-tab'>
    <div className="tab-icon"><BsBriefcase/></div>
    <h3 className="tab-heading">PROJECTS</h3>

    <section className='projectlist'>
      {
        projectList.map(project => (
            <Project 
                title={project.title} 
                description={project.desc} 
                image={project.image} 
                key={project.id} 
                link={project.link} 
                stack={project.stack.map((item, index) => { 
                    return (<li key={index} >{item}</li>)
            } )}
            />
        ))
      }
    </section>
   
</main>
  )
}

export default Projects