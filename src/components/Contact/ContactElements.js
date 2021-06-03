import styled from 'styled-components';

export const IconWrap = styled.div`
  color: #ffab00;
  color: ${(props) => props.theme.highlight};
  font-size: 35px;
`

export const ContactContainer = styled.div `
  /* background: #1b1b1b; */
  background-color: ${(props) => props.theme.bg};
  min-height: 700px;
  padding-top: 80px;
`

export const ContactWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`
export const ContactTitle  = styled.p`
  color: #ff9900;
  color: ${(props) => props.theme.highlight};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding: 16px;
  text-align: center;
`
export const ContactItemWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 50px 0;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ContactItem = styled.a`
  color:#fff;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  font-size: 18px;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`

export const ContantItemDesc = styled.p`
  color: #e2e2e2;
  color: ${(props) => props.theme.text};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`
