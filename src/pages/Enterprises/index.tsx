import React from 'react';

import AccordionEnterprise from '../../components/AccordionEnterprise';

import Navbar from '../../components/Navbar';

import { Container, Header, Items } from './styles';

const Enterprises: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Empresas</h1>

        <Navbar />
      </Header>

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
