import React from 'react'
import { SkillsContainer, SkillsWrapper, TopLine, SkillsFlexWrap, SkillItems, SkillTitle
  ,SkillItem,SkillGroupTitle,SkillIcon,SkillIconWrap
} from './SkillsElements';
import html from '../../images/skills/html.png';
import css from '../../images/skills/css.png';
import jquery from '../../images/skills/jquery.png';
import js from '../../images/skills/js2.PNG';
import node from '../../images/skills/node.png';
import react from '../../images/skills/react.png';
import sass from '../../images/skills/sass.webp';
import maria from '../../images/skills/mariadb1.png';
import mongo from '../../images/skills/mongodb1.png';
import styledc from '../../images/skills/styled-component.png'
import redux from '../../images/skills/redux.png';
import php from '../../images/skills/php.png';

const Skills = () => {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <TopLine>SKILLS</TopLine>
          <SkillsFlexWrap> 

          <SkillItems>
            <SkillGroupTitle>
              Familiar
            </SkillGroupTitle>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={html} /></SkillIconWrap>
              <SkillTitle>HTML 5</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={css} /></SkillIconWrap>
              <SkillTitle>CSS</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={jquery} /></SkillIconWrap>
              <SkillTitle>jQuery</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={js} /></SkillIconWrap>
              <SkillTitle>JavaScript</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={node} /></SkillIconWrap>
              <SkillTitle>Node.js</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={react} /></SkillIconWrap>
              <SkillTitle>React.js</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={sass} /></SkillIconWrap>
              <SkillTitle>Sass/Scss</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={maria} /></SkillIconWrap>
              <SkillTitle>MariaDB</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={mongo} /></SkillIconWrap>
              <SkillTitle>MongoDB</SkillTitle>
            </SkillItem>
          </SkillItems>

          <SkillItems>
            <SkillGroupTitle>
              Tried
            </SkillGroupTitle>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={styledc} /></SkillIconWrap>
              <SkillTitle>Styled-component</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={redux} /></SkillIconWrap>
              <SkillTitle>Redux</SkillTitle>
            </SkillItem>
            <SkillItem>
              <SkillIconWrap><SkillIcon src={php} /></SkillIconWrap>
              <SkillTitle>PHP</SkillTitle>
            </SkillItem>
          </SkillItems>

          </SkillsFlexWrap>

          

        </SkillsWrapper>
      </SkillsContainer>
    </>
  )
}

export default Skills
