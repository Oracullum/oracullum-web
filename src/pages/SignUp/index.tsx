import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link as ReactLink } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { ExternalLogins, Presentation } from '../SignIn/styles';
import { Container, AccessContainer } from './styles';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/hero.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Presentation backgroundImg={heroImg}>
        <ReactLink to="/">
          <img src={logoImg} alt="Oracullum" />
          <p>
            Revele o <span> caminho </span> através de
            <span> dados </span>e<span> insights</span>
          </p>
        </ReactLink>
      </Presentation>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <AccessContainer>
          <span>
            Crie sua conta <strong>Oracullum:</strong>
          </span>
        </AccessContainer>
      </Form>
    </Container>
  );
};

export default SignUp;
