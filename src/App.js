import React, {useState} from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import HeroSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import Projects from './components/Projects';
import { aboutData } from './components/InfoSection/Data';
import './App.css';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <HeroSection />
      <InfoSection {...aboutData} /> 
      <Projects></Projects>
      <Contact></Contact>
      <Footer />
    </>
  );
}

export default App;
