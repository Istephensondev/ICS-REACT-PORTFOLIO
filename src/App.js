import React from "react";
import Nav from "./components/Nav";
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  return (
    <div> 
      <Nav/>
      <About/>
      <Projects/> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;