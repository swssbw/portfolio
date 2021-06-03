import styled from 'styled-components';

export const FooterContainer = styled.footer `
  background-color: ${(props) => props.theme.footerbg};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  
`
export const FooterWrap = styled.div `
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const FooterTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`

export const WebsiteRights = styled.p`
  margin: 10px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`

export const FooterEnd = styled.p`
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
`