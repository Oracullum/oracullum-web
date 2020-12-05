import React from 'react';
import AccordionEnterprise from '../../components/AccordionEnterprise';

import { Container, Items } from './styles';

const Enterprises: React.FC = () => {
  return (
    <Container>
      <h1>Empresas</h1>

      <span>aqui ficará os botões da modal</span>

      <Items>
        <AccordionEnterprise />
        <AccordionEnterprise />
        <AccordionEnterprise />
        <AccordionEnterprise />
        <AccordionEnterprise />
      </Items>
    </Container>
  );
};

export default Enterprises;
