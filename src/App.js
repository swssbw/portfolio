import React, { useState } from 'react'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import InfoSection from './components/InfoSection';
import Projects from './components/Projects';
import { aboutData } from './components/InfoSection/Data';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkmode, lightmode } from './components/theme';

// const darkmode = {
//   highlight: '#ff9900',
//   bg: '#1b1b1b',
//   text: '#e2e2e2',
// };

// const lightmode = {
//   highlight: '#ff9900',
//   bg: '#e2e2e2',
//   text: '#1b1b1b',
// }


function App() {
  
  // theme
  const [theme, setTheme] = useState('dark');

  const handletoggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  
  const btntitle = theme === 'dark' ? '라이트모드로' : '다크모드로';
  
  // side bar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <ThemeProvider theme={theme === 'dark' ? darkmode : lightmode }>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} btntitle={btntitle} handletoggle={handletoggle} /> 
          <MainSection />
          <InfoSection {...aboutData} /> 
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default App;
