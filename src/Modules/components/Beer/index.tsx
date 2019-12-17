import React from 'react';
import styles from './beer.module.scss';
import { Beer as BeerType } from 'Types/PunkApi';
import { Link } from "react-router-dom";

type BeerProps = {
  beer: BeerType;
};

const Beer: React.FC<BeerProps> = ({ beer }) => {
  return (
    <Link to={`${beer.name}`} className={styles.beer}>
      <h4>{beer.name}</h4>
      <img src={beer.image_url} alt={beer.name} height="40" />
      <p>{beer.tagline}</p>
    </Link>
  );
};

export default Beer;
