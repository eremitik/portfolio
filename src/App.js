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

  ${props => props.title && css`
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
    font-size: 15px; 
  `}
`


function App() {
  return (
    <SectionPage>

    <SectionSide>
      <Name />
    </SectionSide>
 
    <SectionIntro>

      <Typography title>"MISSION"</Typography>
      <Typography>世界中に暗号通貨ファンを</Typography>
      <Typography>生み出すデベロッパーへ。</Typography>
        <SectionCushion></SectionCushion>

      <Typography title>"VALUE"</Typography>
      <Typography>Growth First</Typography>
      <Typography secondary>成長が正義</Typography>
      <Typography>Fearless</Typography>
      <Typography secondary>隠れるな</Typography>
      <Typography>Work Hard Play Hard</Typography>
      <Typography secondary>思いっきり働き 思いっきり遊ぶ</Typography>
        <SectionCushion></SectionCushion>

      <Typography title>"PROJECTS"</Typography>
        <Projects />
        <SectionCushion></SectionCushion>

      <Typography title>"ABOUT"</Typography>
        <About />
        <SectionCushion></SectionCushion>

      <Typography title>"RESUME"</Typography>
      <Typography resume>Write some stuff about my resume, give EN/JP options to Notion.</Typography>
        <SectionCushion copyright></SectionCushion>

      <Typography copyright>&copy;MIKIO Crosby. All rights Reserved.</Typography>
        <SectionCushion copyright></SectionCushion>


    </SectionIntro>
   </SectionPage>

  );
}

export default App;
