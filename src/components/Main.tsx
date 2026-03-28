import Hero from "../pages/Hero";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import "../index.css";

export default function Main() {
  return (
    <div className="container">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="projects">
        <Projects  />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
}
