import React from 'react';
import './Title.scss';

type TitleProps = {
  text: string;
  className?: string;
}
const Title: React.FC<TitleProps> = ({ text = 'Beer', className = 'detailsPage-title' }) => <h1 className={className}>{text}</h1>

export default Title;
