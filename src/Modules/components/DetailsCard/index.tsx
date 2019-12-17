import React from 'react';
import { Details } from 'Types';
import { clearCalculation } from 'Lib/actions';
import { useBeerDispatch } from 'Lib/contexts/GlobalBeerContext';
import Image from './components/Image';
import Description from './components/Description';
import { scrollToTop } from 'Modules/helpers/scrollToTop';
import './details.scss';

const DetailsCard: React.FC<Details> = ({ details }) => {

  const dispatch = useBeerDispatch();

  React.useEffect(() => {
    scrollToTop();
    dispatch(clearCalculation(0))
  }, [dispatch])

  return (
    <section className="detailsPage-container">
      <Image details={details} />
      <Description details={details} />
    </section>
  )
}

export default DetailsCard;
