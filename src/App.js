import './App.css';
import styled, { css } from 'styled-components';
import Name from './components/Name';
import About from './components/About';
import Projects from './components/Projects';

const SectionPage = styled.div`
  margin-top: 75px;
`

const SectionIntro = styled.div`
  margin-top: 0px;
  display: inline-block;
  text-align: left;
  margin-left: 200px;
`

const SectionSide = styled.div`
  display: inline-block;
  margin-left: 0;
  position: fixed;
`

const SectionCushion = styled.div`
  margin-top: 100px;

  ${props => props.copyright && css`
    margin-top: 100px;
  `}
`

const Typography = styled.p`
  margin: 0px;
  color: white;
  font-size: 40px;
  font-weight: 700;

  ${props => props.strike && css`
    text-decoration: line-through;
  `}

  ${props => props.header && css`
    margin-bottom: 10px;
  `}

  ${props => props.secondary && css`
    font-size: 13px;
    color: grey;
    margin-bottom: 10px;
  `}

  ${props => props.copyright && css`
    font-size: 10px;
    color: grey;
  `}

  ${props => props.resume && css`
    text-decoration: underline;
    font-size: 16px; 
    transition: 0.3s;
    &:hover {
      color: grey;
    }
  `}
`


function App() {
  return (
    <SectionPage>

    <SectionSide>
      <Name />
    </SectionSide>
 
    <SectionIntro>

      <Typography header>"MISSION"</Typography>
      <Typography>Create more fans of crypto</Typography>
      <Typography secondary>世界中に暗号通貨ファンを</Typography>
      <Typography>through my dev skills.</Typography>
      <Typography secondary>生み出すデベロッパーへ。</Typography>
        <SectionCushion></SectionCushion>

      <Typography header>"VALUE"</Typography>
      <Typography>Positive <span style={{textDecoration:"line-through"}}>Zero</span> sum</Typography>
      <Typography secondary>ポジティブサムに時間かける</Typography>
      <Typography>Fearless</Typography>
      <Typography secondary>隠れるな</Typography>
      <Typography>Work Hard Play Hard</Typography>
      <Typography secondary>思いっきり働き 思いっきり遊ぶ</Typography>
        <SectionCushion></SectionCushion>

      <Typography header>"PROJECTS"</Typography>
        <Projects />
        <SectionCushion></SectionCushion>

      <Typography header>"ABOUT"</Typography>
        <About />
        <SectionCushion></SectionCushion>

      <Typography header>"RESUME"</Typography>
      <a href="https://swanky-lunch-e8a.notion.site/MIKIO-Crosby-6d8f1911197e47a3bbbce95f72d3649f" target="_blank">
        <Typography resume>For a more detailed look at my background, please view my resume.</Typography>
      </a>

      <a href="https://swanky-lunch-e8a.notion.site/5315a84a8092496d83518d7e05bf923d" target="_blank">
        <Typography resume>詳しい経歴は履歴書に記載しております。</Typography>
      </a>
 
      <SectionCushion copyright></SectionCushion>
        <Typography copyright>&copy;MIKIO Crosby. All rights Reserved.</Typography>
      <SectionCushion copyright></SectionCushion>


    </SectionIntro>
   </SectionPage>

  );
}

export default App;
