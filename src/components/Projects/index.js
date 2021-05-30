import React from 'react';

import {
  ProjectsContainer,
  ProjectsWrapper,
  TopLine,
  ProjectsItems,
  ProjectsItem,
  ProjectsTitle,
  ProjectsDesc,
  Button,
  ProjectImgWrap,
  ProjectImg,
  ButtonWrap,
  StackWrap,
  StackNm
} from './ProjectsElements';

import pr2 from '../../images/project2.gif';
import pr3 from '../../images/project3.jpg';

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <TopLine>PROJECTS</TopLine>

          <ProjectsItems>
            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr2} alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>DEMO</Button>
                <Button>Github</Button>
                <Button>Project</Button>
              </ButtonWrap>
            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr2} alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>DEMO</Button>
                <Button>Github</Button>
                <Button>Project</Button>
              </ButtonWrap>

            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr3} alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>DEMO</Button>
                <Button>Github</Button>
                <Button>Project</Button>
              </ButtonWrap>

            </ProjectsItem>

          </ProjectsItems>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default Projects
