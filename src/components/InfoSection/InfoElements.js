import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #e2e2e2;
  background: #0e0e0e;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  padding: 24px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }

`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const ImgWrap = styled.div`
  width: 140px;
  height: 140px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;

  @media screen and (max-width: 768px){
    margin-top: 20px;
  }
`;

export const Name = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: 400;
`;

export const Heading = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
  color: #e2e2e2 ;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #e2e2e2;

  @media screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const SkillsContainer = styled.div`
color: #e2e2e2;
background: #0e0e0e;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const SkillGroupTitle = styled.p`
  color: #ff9900;
  text-align: center;
  font-size: 25px;
`
export const SkillItem = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;
  margin: 5px 0;
`

export const SkillTitle = styled.p`
  font-size: 16px;
  margin: 0 5px;
`
export const SkillIconWrap = styled.div`
  width: 70px;
  height: 70px;
  margin: 5px;
`

export const SkillIcon = styled.img`
  height: 70px;
  
`

export const SkillsItems = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`