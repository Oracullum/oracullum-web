import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Exchanges: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Minhas ações</h1>
    </Container>
  );
};
export default Exchanges;
