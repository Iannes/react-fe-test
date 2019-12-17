import React from 'react';
import { Details } from 'Types';
import './description.scss';

const Description: React.FC<Details> = ({ details }) => {

  return (
    <article className="detailsPage-description">
      <p className="detailsPage-description__text">{details.description}</p>
    </article>
  )
}

export default Description;
