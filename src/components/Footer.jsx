import React from 'react';

const Footer = () => {
  return (
      <main className='footer-tab'>
           {/* <div className="tab-icon"><MdSchool/></div> */}
          <div className="footer-bg"></div>
          <h3 className="tab-heading">Contact me</h3>
          <section className="footer-sections">
            <div className="footer-links">
                <p>
                Nsikak Owo 
                    </p>
                     <p> Frontend Developer</p>
                     <a style={{color:"#fff", marginTop:"10px"}} href="mailto:owonsikak@gmail.com">owonsikak@gmail.com</a>
            </div>
            <div className="footer-links">
            
            <a href="http://github.com/nsikakowo" target='_blank' rel='noreferrer'>Go to Github Profile</a>
            <a href="http://linkedin.com/in/nsikakowo" target='_blank' rel='noreferrer'>Go to Linkedin Profile</a>
            <a href="https://opensea.io/collection/frontendtemplates" target='_blank' rel='noreferrer'>Go to opensea minting collections</a>
            </div>
            <div className="footer-links">
                {/* <div className="tab-icon"><MdSchool/></div> */}
            <a href="tel:+2347036474864">+2347036474864</a>
            </div>
          </section>

          <div className="foot-copy">
              <p>
                 All Rights Reserved &copy;2022 Nsikak OwO
              </p>
          </div>
      </main>
  );
};

export default Footer;
