import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: #e2e2e2;
  background: #1b1b1b;

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
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  width: 310px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  color: #e2e2e2 ;
  padding: 10px;
  height: 520px;
`

export const ProjectImgWrap = styled.div`
  border: 1px solid #0e0e0e;
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
  border: 1px solid #d3d3d345;
  background: #d3d3d345 ;
  margin: 2px;
  padding: 2px 4px;
  border-radius: 6px;
  font-size: 12px;
  color: #d3d3d3 ;
  font-weight: 400;
`

export const ProjectsTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`

export const ProjectsDesc = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 2px 0;
`

export const ButtonWrap = styled.div`
  display: flex;
  margin-top: 5px;
`

export const Button = styled.a`
  text-decoration: none;
  color: #ff9900;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid rgba(255, 153, 0, 0.3);
  margin: 5px;
  width: 75px;
  text-align: center;
  border-radius: 3px;
  background: rgba(255, 153, 0, 0.4);
    color: #fff;

  :hover {
    transition: all 0.1s ease-in-out;
    background: rgba(255, 153, 0, 0.8);
    color: #fff;
  }
`



