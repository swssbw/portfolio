import styled from 'styled-components';
import { FaBlog, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";


export const MailIcon = styled(HiOutlineMail)`
  color: #ffab00;
  font-size: 35px;
`
export const BlogIcon = styled(FaBlog)`
  color: #ffab00;
  font-size: 35px;
`
export const GithubIcon = styled(FaGithub)`
  color: #ffab00;
  font-size: 35px;
`
export const ContactContainer = styled.div `
  width: 100%;
  background: #0e0e0e;
  min-height: 600px;
  padding-top: 80px;
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

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`
export const ContactItem = styled.a`
  color:#fff;
  display: flex;
  align-items: center;
  font-size: 18px;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;


  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 550px) {
    margin: 20px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 20px 0;
  }
`

export const ContantItemDesc = styled.a`
  color: #e2e2e2;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
  
`