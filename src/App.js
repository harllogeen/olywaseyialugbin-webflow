import Home from "./Components/Home/Home";
import { Routes, Route } from 'react-router-dom'
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Project from "./Components/Project/Project";
import { Contact } from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ParticleBackground  from "./Components/ParticleBackground/ParticleBackground";


function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/particle"  element={<ParticleBackground />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/footer"  element={<Footer />} />
      
      </Routes>
    </>
  );
}

export default App;
