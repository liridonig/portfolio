import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="container-app">
        <Profile></Profile>
        <div className="container-app-right">
          <Routes>
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
