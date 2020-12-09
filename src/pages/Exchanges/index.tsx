import React from 'react';
import Accordion from '../../components/Accordion';
// import { ThemeContext } from 'styled-components';

import Navbar from '../../components/Navbar';

import { Container, Header, Items } from './styles';

const Exchanges: React.FC = () => {
  // const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <h1>Minhas Ações</h1>

        <Navbar />
      </Header>

      <Items>
        <Accordion />
        <Accordion />
        <Accordion />
        <Accordion />
      </Items>
    </Container>
  );
};
export default Exchanges;
