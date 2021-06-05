import styled from "styled-components";
import { sectionTitle, sectionWrapper, sectionContainer, image, flexjCenter } from '../globalStyle';

export const ProjectsContainer = styled.div`
  ${sectionContainer}

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  ${sectionWrapper}
  z-index: 1;
`;

export const TopLine = styled.p`
  ${sectionTitle}
  color: ${(props) => props.theme.emphasizetext};
`;

export const ProjectsItems = styled.div`
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin: 0 auto;
  place-items: center;
  
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ProjectsItem = styled.div`
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  width: 310px;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  padding: 10px;
  height: 520px;
  ${flexjCenter}
`

export const ProjectImgWrap = styled.div`
  width: 280px;
  height: 320px;
  margin: 10px 0;
`

export const ProjectImg = styled.img`
  ${image}
`

export const StackWrap = styled.div`
  ${flexjCenter}
  margin-bottom: 5px;
`

export const StackNm = styled.p`
  border: 1px solid rgba(135,131,120,0.2);
  background: rgba(135,131,120,0.15) ;
  margin: 2px;
  padding: 2px 4px;
  border-radius: 6px;
  font-size: 12px;
  color: var(--highlight--color) ;
  font-family: 'Montserrat', sans-serif;
`

export const ProjectsTitle = styled.p`
  font-size: var(--font-s);
  font-weight: 700;
  color: ${(props) => props.theme.emphasizetext};
`

export const ProjectsDesc = styled.p`
  font-size: var(--font-xxs);
  text-align: center;
  margin: 2px 0;
  color: ${(props) => props.theme.desctext};
`

export const ButtonWrap = styled.div`
  ${flexjCenter}
  margin-top: 5px;
`

export const Button = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.emphasizetext};
  margin: 5px;
  width: 75px;
  text-align: center;
  border-radius: 2px;
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  :hover {
    transition: all 0.2s ease-in-out;
    border: ${(props) => props.theme.border};
    background: rgba(135,131,120,0.2);
    color: var(--highlight--color);
  }
`



