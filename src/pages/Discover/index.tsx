import React from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Exchange from '../../components/Exchange';

import { Container, Header, Tables } from './styles';

const Discover: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Descobrir</h1>

        <Navbar />
      </Header>

      <Tables>
        <Card title="Ações" width={20}>
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

        <Card title="Sugestões" width={80} />
      </Tables>
    </Container>
  );
};

export default Discover;
