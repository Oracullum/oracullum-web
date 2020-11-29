import React from 'react';

import Card from '../../components/Card';
import Exchange from '../../components/Exchange';

import { Container, Tables } from './styles';

const Discover: React.FC = () => {
  return (
    <Container>
      <h1>Descobrir</h1>

      <Tables>
        <Card title="Ações">
          <Exchange
            actionName="POSI4"
            companyName="Positivo Info."
            initialValue={380.0}
            stopValue={382.2}
          />

          <Exchange
            actionName="POSI4"
            companyName="Positivo Info."
            initialValue={380.0}
            stopValue={382.2}
          />

          <Exchange
            actionName="POSI4"
            companyName="Positivo Info."
            initialValue={380.0}
            stopValue={382.2}
          />

          <Exchange
            actionName="POSI4"
            companyName="Positivo Info."
            initialValue={380.0}
            stopValue={382.2}
          />

          <Exchange
            actionName="POSI4"
            companyName="Positivo Info."
            initialValue={380.0}
            stopValue={382.2}
          />
        </Card>

        <Card title="Sugestões" />
      </Tables>
    </Container>
  );
};

export default Discover;
