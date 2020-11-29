import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
  width?: number;
}

const Card: React.FC<CardProps> = ({ title, width, children }) => {
  return (
    <Container width={width}>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default Card;
