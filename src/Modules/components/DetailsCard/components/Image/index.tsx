import React from 'react';
import { Details } from 'Types';
import './image.scss'

const ImageContainer: React.FC<Details> = ({ details }) => {

  return (
    <article className="column column-left">
      <section className="column-image">
        <img width="100" src={details.image_url} alt={details.name} />
      </section>
    </article>
  )
}

export default ImageContainer;
