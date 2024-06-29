import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import WhatiDo from "./components/what-i-do/what-i-do";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";

const App = () => {
  return (
    <div>

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <div id="Education">
      <Education/>
      </div>
  
     
    
      <section className="whatiDo" id="What I Do">
      </section>

      <WhatiDo/>


      <section id="Projects">
        <Projects />
      </section>

      <section id="Contact">
        <Contact />
      </section>

    </div>
  );
};

export default App;