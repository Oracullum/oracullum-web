import React from 'react';

import { Container, Item, Divider } from './styles';

interface ActionProps {
  actionName: string;
  companyName: string;
  initialValue: number;
  stopValue: number;
}

const Action: React.FC<ActionProps> = ({
  actionName,
  companyName,
  initialValue,
  stopValue,
}) => {
  return (
    <Container>
      <Item>
        <h4>{actionName}</h4>
        <p>{companyName}</p>
      </Item>

      <Divider />

      <Item>
        <h4>{initialValue} BRL</h4>
        <p>Stop: {stopValue}</p>
      </Item>
    </Container>
  );
};

export default Action;
