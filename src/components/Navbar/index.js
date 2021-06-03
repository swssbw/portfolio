import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer, 
  MobileIcon,
  NavMenu, 
  NavItem, 
  NavLinks,
  ToggleBtn,
  NavLogo,
  Inner,
  Container
} from './NavbarElements';

const Navbar = ({ toggle, btntitle, handletoggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo>
            로고
          </NavLogo>
          
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks onClick={toggleHome}>HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >PROJECTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              >CONTACT</NavLinks>
            </NavItem>
          </NavMenu>

        <Container>
          <ToggleBtn id="checkbox" type="checkbox" onClick={handletoggle} />
          <Inner htmlFor="checkbox" />
        </Container>

        </NavbarContainer>
      </Nav>

    </>
  )
}

export default Navbar
 