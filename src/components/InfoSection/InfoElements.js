import styled from 'styled-components';
import { sectionTitle,sectionWrapper,sectionContainer,image,flexjCenter } from '../globalStyle';
 
export const InfoContainer = styled.div`
  ${sectionContainer}

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const InfoWrapper = styled.div`
  ${sectionWrapper}
  z-index: 1;
`;

export const TopLine = styled.p`
  ${sectionTitle}
`;

export const InfoRow = styled.div`
  ${flexjCenter}
  padding: 24px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrap = styled.div`
  width: 140px;
  height: 140px;
  margin: 10px 30px 40px 0;
`;

export const Img = styled.img`
  ${image}
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.emphasizetext};
  font-size: var(--font-l);

  @media screen and (max-width: 768px) {
    font-size: var(--font-ml);
  }
  
  @media screen and (max-width: 480px) {
    font-size: var(--font-m);
  }
`;

export const Heading = styled.p`
  font-size: var(--font-m);
  margin-bottom: 20px;
  
  @media screen and (max-width: 768px) {
    font-size: var(--font-s);
    margin-bottom: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-xs);
    margin-bottom: 10px;
  }
`;

export const SubTitle = styled.p`
  max-width: 450px;
  font-size: 16px;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const SkillsContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

export const SkillsItems = styled.div`
  ${flexjCenter}
`

export const SkillGroupTitle = styled.p`
  ${sectionTitle}
  font-size: 30px;
`

export const SkillIconWrap = styled.div`
  width: 70px;
  height: 70px;
  margin: 8px;
`

export const SkillIcon = styled.img`
  ${image}
`

export const EName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: var(--font-m);
  font-style: italic;
`