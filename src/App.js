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
import { GlobalStyle } from './components/globalStyle';

function App() {
  
  // theme
  const [theme, setTheme] = useState('dark');

  const handletoggle = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  
  
  // side bar
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
        <ThemeProvider theme={theme === 'dark' ? darkmode : lightmode }>
          <GlobalStyle theme={theme}/>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} handletoggle={handletoggle} /> 
          <MainSection theme={theme}/>
          <InfoSection {...aboutData} /> 
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default App;
