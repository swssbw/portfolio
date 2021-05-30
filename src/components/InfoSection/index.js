import React from 'react'
import { Button } from '../ButtonElements'
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  Column2, 
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap, 
  Img,
  Name,
  SkillsContainer,
  SkillGroupTitle, SkillItem, SkillIconWrap, SkillIcon, SkillTitle, SkillsItems
} from './InfoElements'

import html1 from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import jquery from '../../images/skills/jquery.png';
import js from '../../images/skills/js2.PNG';
import node from '../../images/skills/node.png';
import react from '../../images/skills/react.png';
import sass from '../../images/skills/sass.webp';
import maria from '../../images/skills/mariadb1.png';
import mongo from '../../images/skills/mongodb1.png';


const InfoSection = ({
  lightBg, 
  id, 
  imgStart, 
  topLine, 
  lightText, 
  headline, 
  darkText, 
  description1, description2, description3, 
  buttonLabel, 
  img, 
  alt,
  primary,
  dark,
  dark2
}) => { 
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <TopLine>{topLine}</TopLine>

          <InfoRow>
            <Column>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column>

            <Column>
              <TextWrapper>
                <Name>김민지 <small>MinJi Kim</small></Name>
                <Heading lightText={lightText}>끊임없이 궁금해하고 습득하는 과정에서 즐거움을 느끼며,<br/> 어제보다 더 나은 개발자가 되겠습니다.</Heading>
                <SubTitle darkText={darkText}>{description3}<br/>{description2}<br/>{description1}</SubTitle>
              </TextWrapper>
            </Column>
          </InfoRow>

          <SkillsContainer>
            <SkillGroupTitle>SKILLS</SkillGroupTitle>
            <SkillsItems>
              <SkillIconWrap><SkillIcon src={html1} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={css} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={jquery} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={js} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={react} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={sass} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={node} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={maria} /></SkillIconWrap>
              <SkillIconWrap><SkillIcon src={mongo} /></SkillIconWrap>
            </SkillsItems>

          </SkillsContainer>
        </InfoWrapper>
      </InfoContainer> 
    </>
  )
}

export default InfoSection
