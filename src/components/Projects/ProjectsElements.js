import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #e2e2e2;
  background: ${({lightBg}) => ( lightBg ? '#f9f9f9' : '#0e0e0e ' )};

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  z-index: 1;
  min-height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 0;
`;

export const TopLine = styled.p`
  color: #ff9900;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 16px;
  text-align: center;
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
  border: 1px solid white;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
`

export const ProjectsTitle = styled.p`
  color: white;
`

export const ProjectsDesc = styled.p`
  color: white;
`

export const Button = styled.a`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid red;
  margin: 5px;
`

export const ProjectImgWrap = styled.div`
  border: 1px solid blue;
  width: 250px;
  height: 250px;
  margin: 10px 0;
`

export const ProjectImg = styled.img`
  width: 100%;
`

export const ButtonWrap = styled.div`
  display: flex;
`

export const StackWrap = styled.div`
  display: flex;
`

export const StackNm = styled.p`
  border: 1px solid pink;
  margin: 2px;
  padding: 2px 5px;
  border-radius: 10px;

`