import React from 'react'
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap, 
  Img,
  Name,
  SkillsContainer,
  SkillGroupTitle, 
  SkillIconWrap, 
  SkillIcon,
  SkillsItems
} from './InfoElements'

const InfoSection = ({
  id, topLine, name, ename,
  description1, description2, description3, 
  img, alt,
  html, css, jquery, js, node, react, sass, maria, mongo
}) => { 
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <TopLine>{topLine}</TopLine>
          <InfoRow>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>

              <TextWrapper>
                <Name>{name} <small> {ename}</small></Name>
                <Heading>끊임없이 궁금해하고 습득하는 과정에서 즐거움을 느끼며,<br/> 어제보다 더 나은 개발자가 되겠습니다.</Heading>
                <SubTitle>{description3}<br/>{description2}<br/>{description1}</SubTitle>
              </TextWrapper>
          </InfoRow>

          <SkillsContainer>
            <SkillGroupTitle>SKILLS</SkillGroupTitle>
            <SkillsItems>
              <SkillIconWrap><SkillIcon src={html} /></SkillIconWrap>
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
