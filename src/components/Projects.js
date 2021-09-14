import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { projectData } from '../data.js';

function Projects() {
  return (
    <div>
      {projectData.map((item) => {
        return <Project data={item}/>
      })}
 

    </div>
 )
}

export default Projects;