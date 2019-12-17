import React from 'react';
import { Details } from 'Types';
import Section from 'Modules/components/common/Section'
import './contributors.scss';

const Contributors: React.FC<Details> = ({ details }) => {

  return (
    <Section sectionTitle="contributors">
      <p className="contributors-name">{details.contributed_by}</p>
    </Section>
  )
}

export default Contributors;
