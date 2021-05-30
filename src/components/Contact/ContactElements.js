import styled from 'styled-components';


export const ContactContainer = styled.div `
  width: 100%;
  background: #0e0e0e;
  height: 480px;
`;


export const ContactWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 0 24px;
  flex-wrap: wrap;
`

export const ContactTitle  = styled.p`
  color: #ff9900;
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

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

`

export const ContactItem = styled.div`
  color:#fff;
  display: flex;
  align-items: center;
  font-size: 18px;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    margin: 10px 0;
  }
`

export const ContantItemDesc = styled.a`
  color: #e2e2e2;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
`