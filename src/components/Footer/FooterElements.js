import styled, {css} from 'styled-components';
import {sectionWrapper, flexjCenter} from '../globalStyle';

export const FooterContainer = styled.footer `
  background-color: ${(props) => props.theme.footerbg};
  color: ${(props) => props.theme.text};
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  
`
export const FooterWrap = styled.div `
  ${flexjCenter}
  ${sectionWrapper}
  flex-direction: column;
  padding: 40px 24px;
`

const footerline = styled.p`
  font-family: 'Montserrat', sans-serif;
  margin: 5px 0;
`

export const FooterTitle = styled(footerline)`
  font-weight: 700;
`

export const WebsiteRights = styled(footerline)`
  font-weight: 400;
`

export const FooterEnd = styled(footerline)`
  font-size: 12px;
`

