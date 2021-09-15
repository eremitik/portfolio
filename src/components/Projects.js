import React from 'react';
import Project from './Project';
import { projectData } from '../data.js';

function Projects() {
  return (
    <div>
      {projectData.map((item, index) => {
        return <Project data={item} key={index}/>
      })}
    </div>
 )
}

export default Projects;