import React from 'react';
import Accordion from '../../components/Accordion';
// import { ThemeContext } from 'styled-components';

import { Container, Items } from './styles';

const Exchanges: React.FC = () => {
  // const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Minhas ações</h1>

      <Items>
        <Accordion />
        <Accordion />
        {/* <Accordion /> */}
        {/* <Accordion /> */}
      </Items>
    </Container>
  );
};
export default Exchanges;
