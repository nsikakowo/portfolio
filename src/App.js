import {Topbar, Hero,Footer, Summary, Experience, Certifications, Skills} from "./components"
import { MdVerticalAlignTop } from 'react-icons/md';
import {
  HideOn
} from "react-hide-on-scroll";
import './App.css'

function App() {
  return (
    <main >
      <section className="main-body">
        <Topbar/>
        <Hero/>
        <Summary/>
        <Experience/>
        <Certifications/>
        <Skills/>
        <Footer/>
      </section>
      <HideOn inverse height={1000}>
        <div className='backToTop' onClick={()=> window.scroll(0, 0)}>
          <MdVerticalAlignTop />
        </div>
        </HideOn>
     
    </main>
  );
}

export default App;
