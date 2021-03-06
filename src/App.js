import './App.css';
import styled, { css } from 'styled-components';
import Name from './components/Name';
import About from './components/About';
import Projects from './components/Projects';

const SectionPage = styled.div`
  margin-top: 75px;

  @media only screen and (max-width: 1200px) {
    margin-top: 60px;
    width: calc(100vw - 100px);
  }
`

const SectionIntro = styled.div`
  margin-top: -8px;
  display: inline-block;
  text-align: left;
  margin-left: 200px;

  @media only screen and (max-width: 1200px) {
    margin-top: -5px;
    margin-left: 100px;
  }
`

const SectionSide = styled.div`
  display: inline-block;
  margin-left: 0;
  position: fixed;
`

const SectionCushion = styled.div`
  margin-top: 100px;

  @media only screen and (max-width: 1200px) {
    margin-top: 75px;
  }

  ${props => props.copyright && css`
    margin-top: 100px;
  `}

`

const Typography = styled.p`
  margin: 0px;
  color: white;
  font-size: 40px;
  font-weight: 700;

  @media only screen and (max-width: 860px) {
    font-size: 25px;
  }

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

    @media only screen and (max-width: 860px) {
      font-size: 10px;
    }
  `}

  ${props => props.copyright && css`
    font-size: 10px;
    color: grey;

    @media only screen and (max-width: 860px) {
      font-size: 10px;
    }
  `}

  ${props => props.resume && css`
    text-decoration: underline;
    font-size: 16px; 
    transition: 0.3s;
    &:hover {
      color: grey;
    }

    @media only screen and (max-width: 860px) {
      font-size: 12px;
    }
  `}
`

//const ResumeDiv = styled.div`
//    width: 80vw;
//`


function App() {
  return (
    <SectionPage>

    <SectionSide>
      <Name />
    </SectionSide>
 
    <SectionIntro>

      <Typography header>"MISSION"</Typography>
      <Typography>Create more fans of crypto</Typography>
      <Typography secondary>????????????????????????????????????</Typography>
      <Typography>through my dev skills.</Typography>
      <Typography secondary>????????????????????????????????????</Typography>
        <SectionCushion></SectionCushion>

      <Typography header>"VALUE"</Typography>
      <Typography>Positive <span style={{textDecoration:"line-through"}}>Zero</span> sum</Typography>
      <Typography secondary>???????????????????????????????????????</Typography>
      <Typography>Fearless</Typography>
      <Typography secondary>????????????</Typography>
      <Typography>Work Hard Play Hard</Typography>
      <Typography secondary>????????????????????? ?????????????????????</Typography>
        <SectionCushion></SectionCushion>

      <Typography header>"PROJECTS"</Typography>
        <Projects />
        <SectionCushion></SectionCushion>

      <Typography header>"ABOUT"</Typography>
        <About />
        <SectionCushion></SectionCushion>

      {/*
      <ResumeDiv>
        <Typography header>"RESUME"</Typography>
          <a href="https://swanky-lunch-e8a.notion.site/MIKIO-Crosby-6d8f1911197e47a3bbbce95f72d3649f" target="_blank">
            <Typography resume>For a more detailed look at my background, please view my resume.</Typography>
          </a>

          <a href="https://swanky-lunch-e8a.notion.site/5315a84a8092496d83518d7e05bf923d" target="_blank">
            <Typography resume>?????????????????????????????????????????????????????????</Typography>
          </a>
      </ResumeDiv>
      */}
 
      <SectionCushion copyright></SectionCushion>
        <Typography copyright>&copy;MIKIO Crosby. All rights Reserved.</Typography>
      <SectionCushion></SectionCushion>


    </SectionIntro>
   </SectionPage>

  );
}

export default App;
