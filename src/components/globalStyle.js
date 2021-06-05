import { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  body {
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap");
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,400&display=swap");

  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }


  :root {
    --highlight--color : #EB5757;
    --font-xl: 36px;
    --font-l: 28px;
    --font-ml: 24px;
    --font-m: 22px;
    --font-s: 18px;
    --font-xs: 16px;
    --font-xxs: 14px;
  }
`


export const sectionTitle = css`
  color: var(--highlight--color);
  font-size: var(--font-xl);
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 16px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`

export const sectionWrapper = css`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 0;
`

export const sectionContainer = css`
  min-height: 750px;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`

export const image = css`
  width: 100%;
`

export const flexjCenter = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`