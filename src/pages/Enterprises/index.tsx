import React from 'react';
import AccordionEnterprise from '../../components/AccordionEnterprise';

import { Container, Items } from './styles';

const Enterprises: React.FC = () => {
  return (
    <Container>
      <h1>Empresas</h1>

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
