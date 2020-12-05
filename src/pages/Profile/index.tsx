import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';

import Navbar from '../../components/Navbar';

import { Container, Header, BoxProfile, Item } from './styles';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
    // data.operation = isBuy ? 'buy' : 'sell';
  }, []);
  return (
    <Container>
      <Header>
        <h1>Perfil</h1>

        <Navbar />
      </Header>
      <BoxProfile>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Item>
            <label>Nome</label>
            <input name="name" />
          </Item>

          <Item>
            <label>Email</label>
            <input name="email" />
          </Item>

          <Item>
            <label>Senha</label>
            <input name="password" type="password" />
          </Item>

          <Item>
            <label>Confirmação de Senha</label>
            <input name="confirm_password" type="password" />
          </Item>

          <button type="button">Atualizar</button>
        </Form>
      </BoxProfile>
    </Container>
  );
};

export default Profile;
