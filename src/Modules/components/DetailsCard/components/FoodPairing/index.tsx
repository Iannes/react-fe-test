import React from 'react';
import { Details } from 'Types';
import Section from 'Modules/components/common/Section'
import './foodPairing.scss';

const FoodPairing: React.FC<Details> = ({ details }) => {

  return (
    <Section sectionTitle="Foods that pair">
      <article className="list-container">
        {details && details.food_pairing && details.food_pairing.map((pairing: string) => {
          return <article key={pairing} className="list-item">{pairing}</article>
        })}
      </article>
    </Section>
  )
}

export default FoodPairing;
