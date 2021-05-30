import React from 'react';
import { 
  FooterContainer,
  FooterWrap,
  SocialMediaWrap,
  WebsiteRights,
  FooterTitle,
  FooterEnd
 } from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
            <FooterTitle>Frontend Developer MinJi Kim</FooterTitle>
            <SocialMediaWrap>
              <WebsiteRights>
                minji &copy; {new Date().getFullYear()} &nbsp;
                All rights reserved.
              </WebsiteRights>
            </SocialMediaWrap>  
            <FooterEnd>
              이 웹사이트는 포트폴리오 용도로 제작하였으며 상업적인 용도로 사용하지 않음을 밝힙니다.<br/>
              Built with ReactJS                                                                                                                                                                                                                       
            </FooterEnd>
        </FooterWrap>
      </FooterContainer> 
    </>
  )
}

export default Footer