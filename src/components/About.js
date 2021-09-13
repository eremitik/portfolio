import React from 'react';
import Table from '../components/Table.js';
import { aboutData } from '../data';

function About() {
  return (
    <div>
      <Table data={aboutData} />
    </div>
  )
}

export default About;