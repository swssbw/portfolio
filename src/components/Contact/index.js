import React, { useState } from "react";
import { FaBlog, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiCopy } from "react-icons/bi";
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactItemWrapper,
  ContactItem,
  ContantItemDesc,
  IconWrap,
  EmailWrap,
} from "./ContactElements";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

const Contact = () => {
  const [Visible, setVisible] = useState(false);

  const onClickHandler = () => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = "swij1004@naver.com";
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactItemWrapper>
            <ContactItem onClick={onClickHandler}>
              <IconWrap>
                <HiOutlineMail />
              </IconWrap>
              <EmailWrap>
                Email <BiCopy />
              </EmailWrap>
              <ContantItemDesc>swij1004@naver.com</ContantItemDesc>
            </ContactItem>
            <Rodal
              visible={Visible}
              onClose={hide}
              width={300}
              height={200}
              animation="zoom"
              duration={500}
            >
              <p
                style={{ textAlign: "center", padding: "50px", color: "black" }}
              >
                메일 주소 복사 완료!
              </p>
            </Rodal>
            <ContactItem href="https://swssbw.tistory.com/" target="_blank">
              <IconWrap>
                <FaBlog />
              </IconWrap>
              Blog
              <ContantItemDesc
                href="https://swssbw.tistory.com/"
                target="_blank"
              >
                swssbw.tistory.com
              </ContantItemDesc>
            </ContactItem>
            <ContactItem href="https://github.com/swssbw" target="_blank">
              <IconWrap>
                <FaGithub />
              </IconWrap>
              Github
              <ContantItemDesc href="https://github.com/swssbw" target="_blank">
                github.com/swssbw
              </ContantItemDesc>
            </ContactItem>
          </ContactItemWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
