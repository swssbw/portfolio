import React from 'react'
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink 
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80} 
            onClick={toggle}>Home</SidebarLink>
          <SidebarLink 
            to="about" 
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}>About</SidebarLink>
          <SidebarLink 
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}>Projects</SidebarLink>
          <SidebarLink 
            to="contact" 
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
