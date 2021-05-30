import React from 'react'

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

} from './ProjectsElements'

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <TopLine>PROJECTS</TopLine>
          <ProjectsItems>
            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>Github</Button>
                <Button>Github</Button>
                <Button>Github</Button>
              </ButtonWrap>

            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>Github</Button>
                <Button>Github</Button>
                <Button>Github</Button>
              </ButtonWrap>

            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg alt="프로젝트 썸네일"/>
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>react</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongodb</StackNm>
              </StackWrap>
              <ProjectsTitle>프로젝트명</ProjectsTitle>
              <ProjectsDesc>프로젝트 설명</ProjectsDesc>
              <ButtonWrap>
                <Button>Github</Button>
                <Button>Github</Button>
                <Button>Github</Button>
              </ButtonWrap>

            </ProjectsItem>

          </ProjectsItems>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  )
}

export default Projects
