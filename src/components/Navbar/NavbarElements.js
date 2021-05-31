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
  justify-content: center;
  padding: 0 24px;
  height: 80px;
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

  &:hover {
    font-weight: 700;
  }

  &.active {
    border-bottom: 3px solid #ff9900;
    color: #ff9900;
  }
`
