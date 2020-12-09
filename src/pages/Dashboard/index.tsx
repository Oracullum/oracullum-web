import React from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Exchange from '../../components/Exchange';

import { Container, Header, Cards } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>

        <Navbar />
      </Header>

      <Cards>
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

        <Card title="Sugestões" width={80}>
          <div className="card-production">
            <span>EM PRODUÇÃO</span>
          </div>
        </Card>
      </Cards>
    </Container>
  );
};

export default Dashboard;
