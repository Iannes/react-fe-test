import React from 'react';
import { useHistory } from 'react-router-dom';
import { useBeerState, useBeerDispatch } from 'Lib/contexts/GlobalBeerContext';
import { clearBeerDetails } from 'Lib/actions';
import Section from 'Modules/components/common/Section'
import Button from 'Modules/components/common/Button';
import './calculation.scss';

type CalculationState = {
  handleClick(): void;
}

const Calculation: React.FC<CalculationState> = ({ handleClick }) => {

  const state = useBeerState();
  const dispatch = useBeerDispatch();
  const history = useHistory();

  const handleBack = () => {
    dispatch(clearBeerDetails([]));
    history.push('/');
  }

  return (
    <Section sectionTitle='gravity difference' hasDivider>
      <article className="calculation-container">
        <span className="calculation">{state.calculation || 0}</span>
        <Button onClick={handleClick} text='Calculate' />
        <Button onClick={handleBack} text='Home' />
      </article>
    </Section>
  )
}

export default Calculation;
