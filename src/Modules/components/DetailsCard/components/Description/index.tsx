import React from 'react';
// Hooks
import { useBeerDispatch, useBeerState } from 'Lib/contexts/GlobalBeerContext';
// Types
import { Details as DetailsTypes } from 'Types';
// Actions
import { calculateDifference } from 'Lib/actions';
// Components
import Contributors from '../Contributors';
import Description from './Description';
import Details from '../Details';
import Title from 'Modules/components/common/Title';
import FoodPairing from '../FoodPairing';
import Calculation from '../Calculation';
import './description.scss';

const DescriptionContainer: React.FC<DetailsTypes> = ({ details }) => {

  const state = useBeerState();
  const dispatch = useBeerDispatch();

  const handleClick = () => dispatch(calculateDifference(state))

  return (
    <article className="column column-right">
      <Title text={details.name || ''} />
      <Description details={details} />
      <FoodPairing details={details} />
      <Details details={details} />
      <Contributors details={details} />
      <Calculation handleClick={handleClick} />
    </article>
  )
}

export default DescriptionContainer;
