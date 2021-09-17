import React from 'react';
import styled from 'styled-components';
import Twitter from '../icons/twitter.png'
import Github from '../icons/github.png'
import Linkedin from '../icons/linkedin.png'

const NameDiv = styled.div`
  width: 200px;

  @media only screen and (max-width: 1200px) {
    width: 100px;
  }
`

const Typography = styled.p`
  color: white;
  font-size: 75px;
  font-weight: 900;
  writing-mode: vertical-rl;
  text-orientation: mixed;

  @media only screen and (max-width: 1200px) {
    font-size: 40px;
  }
`

const SocialContainer = styled.div`
  margin-top: calc(100vh - 790px);
  margin-left: auto;
  width: 100px;

  @media only screen and (max-width: 1200px) {
    margin-top: calc(100vh - 475px);
    margin-bottom: auto;
    width: 50px;
  }
`

const Image = styled.img`
  cursor: pointer;
  width: 15px;
`

const ImageCushion = styled.div`
  margin-top: 25px;
`

const Link = styled.a``

function Name () {

  return (
    <NameDiv>
        <Typography>MIKIO Crosby.</Typography>
        <SocialContainer>
          <Link href="https://github.com/eremitik" target="_blank"><Image src={Github}/></Link>
            <ImageCushion></ImageCushion>
          <Link href="https://twitter.com/eremitik" target="_blank"><Image src={Twitter}/></Link>
            <ImageCushion></ImageCushion>
          <Link href="https://www.linkedin.com/in/eremitik/" target="_blank"><Image src={Linkedin}/></Link>
        </SocialContainer>
    </NameDiv>
  )
}

export default Name;
