import styled from "styled-components";
import {
  sectionTitle,
  sectionWrapper,
  sectionContainer,
  flexjCenter,
} from "../globalStyle";

export const IconWrap = styled.div`
  color: var(--highlight--color);
  font-size: 35px;
`;

export const ContactContainer = styled.div`
  ${sectionContainer}
`;

export const ContactWrapper = styled.div`
  ${sectionWrapper}
  ${flexjCenter}
  padding: 100px 24px;
  flex-direction: column;
`;

export const ContactTitle = styled.p`
  ${sectionTitle}
  color: ${(props) => props.theme.emphasizetext};
`;

export const ContactItemWrapper = styled.div`
  ${flexjCenter}
  justify-content: space-evenly;
  width: 100%;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactItem = styled.a`
  color: ${(props) => props.theme.emphasizetext};
  display: flex;
  align-items: center;
  font-size: 18px;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
`;

export const ContantItemDesc = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const EmailWrap = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;
