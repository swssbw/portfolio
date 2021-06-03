import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  z-index: 1;
  min-height: 800px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const TopLine = styled.p`
  color: ${(props) => props.theme.emphasizetext};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 16px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
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
  width: 310px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  color: ${(props) => props.theme.text};
  padding: 10px;
  height: 520px;
`

export const ProjectImgWrap = styled.div`
  width: 280px;
  height: 320px;
  margin: 10px 0;
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
`

export const StackWrap = styled.div`
  display: flex;
  margin-bottom: 5px;
  flex-wrap: wrap;
`

export const StackNm = styled.p`
  border: 1px solid rgba(135,131,120,0.2);
  background: rgba(135,131,120,0.15) ;
  margin: 2px;
  padding: 2px 4px;
  border-radius: 6px;
  font-size: 12px;
  color: #EB5757 ;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`

export const ProjectsTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.emphasizetext};
`

export const ProjectsDesc = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 2px 0;
  color: ${(props) => props.theme.desctext};
`

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 5px;
`

export const Button = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.highlight};
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
    color: ${(props) => props.theme.emphasizetext};
    background: rgba(135,131,120,0.9);
  }
`



