import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav `
  background: ${({scrollNav}) => (scrollNav ? '#101010' : 'transparent') };
  height: 80px;
  margin-top: -80px; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`
export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 0 24px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavLogo = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  color: transparent;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS) `
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  &:hover {
    color: #EB5757;
  }

  &.active {
    border-bottom: 2px solid #EB5757;
    color: #EB5757;
  }
`
export const Container = styled.div `
  position: relative;
  display: flex;
  align-items: center; 
`

export const Inner = styled.label`
  position: absolute;
  top: 40;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #555;
  
  cursor: pointer;
  line-height: 26px;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #fff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const ToggleBtn = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${Inner} {
    background: #cccccc;

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
