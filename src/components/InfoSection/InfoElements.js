import styled from 'styled-components';


export const InfoContainer = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const InfoWrapper = styled.div`
  z-index: 1;
  min-height: 800px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const TopLine = styled.p`
  color: #EB5757;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 16px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: center;
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
  width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Name = styled.p`
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Heading = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const SkillGroupTitle = styled.p`
  color: #EB5757;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  margin: 20px 0;
  font-family: 'Montserrat', sans-serif;
`

export const SkillIconWrap = styled.div`
  width: 70px;
  height: 70px;
  margin: 8px;
`

export const SkillIcon = styled.img`
  width: 100%;
`

export const EName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  font-style: italic;
`