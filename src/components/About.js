import React from 'react';
import Table from '../components/Table.js';
import { aboutData } from '../data';

function About() {
  return (
    <div>
      <Table titles={Object.keys(aboutData[0])} data={aboutData} />
    </div>
  )
}

export default About;