import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  @media only screen and (max-width: 1200px) {
    width: calc(100vw - 125px);
  }

  @media only screen and (max-width: 860px) {
    margin-top: 20px;
    margin-bottom: 40px;
    height: 60vw;
  }

  @media only screen and (max-width: 414px) {
    margin-bottom: 30px;
    margin-top: 20px;
    width: calc(70vw);
    height: 250px;
  }
`

const Card = styled.div`
  position: relative;
  bottom: 0;
  transition: 0.3s;
  display: flex;
  width: 1000px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 40px;
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    bottom: 5px;
  }

  @media only screen and (max-width: 1200px) {
    width: calc(100vw - 125px);
  }

  @media only screen and (max-width: 860px) {
    margin-top: 20px;
    margin-bottom: 40px;
    height: 60vw;
  }

  @media only screen and (max-width: 414px) {
    margin-bottom: 30px;
    margin-top: 20px;
    width: calc(70vw);
    height: 250px;
  }
`

const Typography = styled.p`
  display: inline-block;
  margin-top: auto;
  margin-left: 25px;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: -1px;
`

const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 615px;
  float: right;
  margin-top: auto;
  margin-left: auto;

  @media only screen and (max-width: 860px) {
    position: absolute;
    display: flex;
    margin-top: 5px;
    margin-bottom: auto;
    width: calc(100vw - 125px);
    height: auto;
  }

  @media only screen and (max-width: 585px) {
    position: absolute;
    margin-top: 5px;
    margin-bottom: auto;
    width: 100%;
    height: auto;
  }
`

const Link = styled.a`
  color: black;
  text-decortation-color: transparent;
  width: 1000px;
`

function Project({ data }) {
  return (
    <Container>
    <Link href={data.Link} target="_blank">
      <Card>
        <Typography>{data.Title}</Typography>
        <Image src={data.Image}/>
      </Card>
    </Link>
    </Container>
  )
}

export default Project;