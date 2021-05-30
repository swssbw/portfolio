import React from 'react'
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH1,
  ServicesH2,
  ServicesP
} from './ServiceElements'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>비용을 줄이세요!</ServicesH2>
            <ServicesP>비용 절감을 도와드립니다.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>가상의 사무실</ServicesH2>
            <ServicesP>온라인 플랫폼을 사용하여 세상 어디서든 접속해보세요</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>프리미엄 혜택</ServicesH2>
            <ServicesP>특별한 멤버쉽을 통해 5%캐쉬백을 받으세요</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer> 
    </>
  )
}

export default Services
