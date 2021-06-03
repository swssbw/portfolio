import React, { useState } from 'react';
import bg from '../../images/bg3.jpg';


import {
  ArrowFoward,
  ArrowRight,
  Button,
  Bg,
  BgWrapper,
  MainContainer,
  MainContent,
  MainHeading,
  MainP
} from './MainElements'

const MainSection = (props) => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <MainContainer id="home">
      <BgWrapper>
        <Bg src={bg}></Bg>
      </BgWrapper>

      <MainContent>
        <MainP>안녕하세요!</MainP>
        <MainHeading>프론트엔드개발자<br/>김민지 입니다 </MainHeading>
          <Button 
            to="about" 
            onMouseEnter={onHover} 
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}>
            Click me! {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
      </MainContent>
    </MainContainer>
  )
}

export default MainSection
