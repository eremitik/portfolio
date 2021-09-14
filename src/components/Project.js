import React from 'react';
import styled from 'styled-components';

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
`

const Typography = styled.p`
  display: inline-block;
  margin-top: auto;
  margin-left: 25px;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -1px;
`

const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 600px;
  float: right;
  margin-top: auto;
  margin-left: auto;
  // margin-right: -10px;
  // z-index: -2;
`

function Project({ data }) {
  console.log(data.Link)

  return (
    <Card href={data.Link}>
      <Typography>{data.Title}</Typography>
      <Image src={data.Image}/>
    </Card>
  )
}

export default Project;