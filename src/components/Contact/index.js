import React, {useState} from 'react';
import { FaBlog, FaGithub, } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import {ContactContainer, ContactWrapper,ContactTitle,ContactItemWrapper,ContactItem
,ContantItemDesc} from './ContactElements';
import Rodal from 'rodal';
// import 'rodal/lib/rodal.css';
import '../../rodal.css';

const Contact = () => {
  
  const [Visible, setVisible] = useState(false);

  const onClickHandler = () => {
    document.execCommand("copy");
    setVisible(true);
  }
  
  const hide = () => {
    setVisible(false);
  }

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactTitle>
            Contact Me!
          </ContactTitle>

          <ContactItemWrapper>
            <ContactItem onClick={onClickHandler} >
              <HiOutlineMail />&nbsp;Email 
              <ContantItemDesc >swij1004@naver.com</ContantItemDesc>
            </ContactItem>
            <Rodal visible={Visible} onClose={hide} width={300} height={200} animation="zoom" duration="500">
                메일 주소 복사 완료!
              </Rodal>
            <ContactItem>
              <FaBlog/> &nbsp;Blog 
              <ContantItemDesc href="https://swssbw.tistory.com/" target="_blank">swssbw.tistory.com</ContantItemDesc>
            </ContactItem>
            <ContactItem>
              <FaGithub/> &nbsp;Github 
              <ContantItemDesc href="https://github.com/swssbw" target="_blank">github.com/swssbw</ContantItemDesc>
            </ContactItem>
          </ContactItemWrapper>

        </ContactWrapper>
      </ContactContainer>
    </>
  )
}

export default Contact
