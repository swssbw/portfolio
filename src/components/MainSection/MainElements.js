import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

export const MainContainer = styled.div`
  background: #0e0e0e ;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
  color: #e2e2e2;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 2;
  }
`;

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Bg = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeading = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const MainP = styled.p `
  margin-top: 24px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: rgba(0,0,0,0.4);
  color: #ff9900;
  white-space: nowrap;
  outline: none;
  border: 2px solid #ff9900;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 12px 30px;
  font-weight: bold;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: rgba(255, 153, 0, 0.5);
    color: #fff;
  }
`;

export const ArrowFoward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

