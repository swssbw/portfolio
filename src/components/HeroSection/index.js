import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowFoward,
  ArrowRight,
  Button
} from './HeroElements'

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  
  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
        </VideoBg>
      </HeroBg>

      <HeroContent>
        <HeroP>안녕하세요</HeroP>
        <HeroH1>프론트엔드개발자<br />김민지 입니다. </HeroH1>
        <HeroBtnWrapper>
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
            offset={-80}            >
            Click me! {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
