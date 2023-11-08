import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  BrowserRouter,
  Routes,
} from "react-router-dom";

// Import your page components
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
       <Header/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </BrowserRouter>
     
      

      <Footer/>
    </div>
  );
}

export default App;
