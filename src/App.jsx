import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="container-app">
        <Profile></Profile>
        <div className="container-app-right">
          <Introduce></Introduce>
          <About></About>
          <Resume></Resume>
          <Skills></Skills>
          <Contact></Contact>
          <Footer></Footer>
          <Routes>
            <Route path="/Introduce" element={<Introduce></Introduce>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Resume" element={<Resume></Resume>}></Route>
            <Route path="/Skills" element={<Skills></Skills>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
