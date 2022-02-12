import {Topbar, Hero,Footer, Summary, Experience, Certifications, Skills} from "./components"
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
     
    </main>
  );
}

export default App;
