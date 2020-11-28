import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};

export default Card;
