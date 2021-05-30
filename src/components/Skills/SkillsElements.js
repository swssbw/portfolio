import styled from 'styled-components';


export const SkillsContainer = styled.div`
  color: #e2e2e2;
  background: ${({lightBg}) => ( lightBg ? '#f9f9f9' : '#0e0e0e ' )};

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const SkillsWrapper = styled.div`
z-index: 1;
min-height: 600px;
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

export const SkillsFlexWrap = styled.div`
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  padding: 24px;

  @media screen and (max-width: 768px){
    flex-direction: column;
    
  }
`

export const SkillItems = styled.div`
margin-bottom: 15px;
padding: 0 15px;
`;

export const SkillGroupTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
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
  width: 50px;
  height: 50px;
`

export const SkillIcon = styled.img`
  height: 50px;
  
`