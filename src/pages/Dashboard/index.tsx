import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Button from '../../components/Button';
import Card from '../../components/Card';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;
