import React from 'react';
import { Section } from 'Types';
import './section.scss';

const SectionContainer: React.FC<Section> = ({ sectionTitle, hasDivider, children }) => {

  return (
    <section className={`detailsPage-section ${sectionTitle}`}>
      <h3 className='detailsPage-section__subtitle'>{sectionTitle}</h3>
      {hasDivider && <hr />}
      {children}
    </section>
  )
}

export default SectionContainer;
