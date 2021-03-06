import React from "react";

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
  StackNm,
} from "./ProjectsElements";

import pr1 from "../../images/project1.PNG";
import pr2 from "../../images/project2.gif";
import pr3 from "../../images/project3.jpg";

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <TopLine>PROJECTS</TopLine>

          <ProjectsItems>
            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr1} alt="프로젝트 썸네일" />
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>React</StackNm>
                <StackNm>Redux</StackNm>
                <StackNm>express</StackNm>
                <StackNm>mongoDB</StackNm>
                <StackNm>Scss</StackNm>
              </StackWrap>
              <ProjectsTitle>Mini shop</ProjectsTitle>
              <ProjectsDesc>
                Redux와 Redux-thunk를 활용한 미니 쇼핑몰 프로젝트 입니다. &nbsp;{" "}
              </ProjectsDesc>
              <ButtonWrap>
                {/* <Button>DEMO</Button> 배포 준비중 */}
                <Button
                  href="https://github.com/swssbw/minishop"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  href="https://www.notion.so/Mini-shop-2082fd2aed52464dbb5161cd50196775"
                  target="_blank"
                >
                  Project
                </Button>
              </ButtonWrap>
            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr2} alt="프로젝트 썸네일" />
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>React</StackNm>
                <StackNm>Express</StackNm>
                <StackNm>mongoDB</StackNm>
                <StackNm>Scss</StackNm>
              </StackWrap>
              <ProjectsTitle>분리수거 검색기</ProjectsTitle>
              <ProjectsDesc>
                사용자가 품목을 검색하면 <br /> 구분 & 배출방법을 안내해줍니다.
              </ProjectsDesc>
              <ButtonWrap>
                <Button
                  href="https://wasteproject.herokuapp.com/"
                  target="_blank"
                >
                  DEMO
                </Button>
                <Button
                  href="https://github.com/swssbw/wasteProject"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  href="https://www.notion.so/81331f1458cd412393f4cbe4c8cdc9df"
                  target="_blank"
                >
                  Project
                </Button>
              </ButtonWrap>
            </ProjectsItem>

            <ProjectsItem>
              <ProjectImgWrap>
                <ProjectImg src={pr3} alt="프로젝트 썸네일" />
              </ProjectImgWrap>
              <StackWrap>
                <StackNm>JavaScript</StackNm>
                <StackNm>React</StackNm>
                <StackNm>Styled-component</StackNm>
              </StackWrap>
              <ProjectsTitle>포트폴리오 페이지</ProjectsTitle>
              <ProjectsDesc>
                포트폴리오용 페이지를 제작하였습니다. <br /> &nbsp;{" "}
              </ProjectsDesc>
              <ButtonWrap>
                <Button href="https://minji.xyz/" target="_blank">
                  DEMO
                </Button>
                <Button
                  href="https://github.com/swssbw/portfolio"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  href="https://www.notion.so/ed971de0c9ca4d2ebe9b48c83f25089f"
                  target="_blank"
                >
                  Project
                </Button>
              </ButtonWrap>
            </ProjectsItem>
          </ProjectsItems>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
