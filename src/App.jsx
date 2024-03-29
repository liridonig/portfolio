import "./App.css";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";
import Projects from "./components/projects/Projects";

function App() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".standby");

    function fadeOnScroll() {
      const trigerBottom = (window.innerHeight / 5) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < trigerBottom) {
          box.classList.add("fadein");
        } else {
          box.classList.remove("fadein");
        }
      });
    }

    window.addEventListener("scroll", fadeOnScroll);
    fadeOnScroll();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="container-app">
        <Profile />
        <div className="container-app-right">
          <Introduce />
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
