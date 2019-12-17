import React from 'react';
import { Details } from 'Types';
import Section from 'Modules/components/common/Section'
import './beerDetails.scss';

const BeerDetails: React.FC<Details> = ({ details }) => {

  return (
    <Section sectionTitle="Details">
      <article className="list-container">
        <p className="beerDetails-abv list-item list-item--beer">first brewed: <span>{details.first_brewed}</span></p>
        <p className="beerDetails-abv list-item list-item--beer">alcohol by volume: <span>{details.abv}</span></p>
        <p className="beerDetails-abv list-item list-item--beer">ibu: <span>{details.ibu}</span></p>
      </article>
    </Section>
  )
}

export default BeerDetails;
