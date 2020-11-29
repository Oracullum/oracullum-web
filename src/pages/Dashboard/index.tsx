import React from 'react';

import Navbar from '../../components/Navbar';

import { Container, Header } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Dashboard</h1>

        <Navbar />
      </Header>
    </Container>
  );
};

export default Dashboard;
