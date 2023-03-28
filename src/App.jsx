import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="header">
      <div className="navbar">
        <Navbar></Navbar>
        <Profile></Profile>
        <Routes>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Contact" element={<Contact></Contact>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
