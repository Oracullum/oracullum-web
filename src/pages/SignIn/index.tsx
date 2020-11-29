import React, { useContext, useRef, useCallback } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiMail, FiEye, FiUserPlus, FiLogIn } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ExternalLoginButton from '../../components/ExternalLoginButton';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Link from '../../components/Link';

import logoImg from '../../assets/logo.svg';
import heroImg from '../../assets/hero.svg';

import {
  Container,
  Presentation,
  AccessContainer,
  ExternalLogins,
  ActionButtons,
  RememberMeContainer,
} from './styles';

const SignIn: React.FC = () => {
  const { colors } = useContext(ThemeContext);

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
          <span>Fazer login com:</span>

          <ExternalLogins>
            <ExternalLoginButton icon={FaGoogle} size={40} color="#00A3FF" />

            <ExternalLoginButton icon={FaFacebookF} size={40} color="#0076B9" />
          </ExternalLogins>

          <span>
            ou com <strong>Oracullum</strong>
          </span>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiEye} placeholder="Senha" />

          <ActionButtons>
            <Button type="submit" color={colors.primary}>
              Login
              <FiLogIn color={colors.white} size={20} />
            </Button>

            <Link to="/register" outline color={colors.primary}>
              Cadastrar
              <FiUserPlus color={colors.primary} size={20} />
            </Link>
          </ActionButtons>

          <RememberMeContainer>
            <ReactLink to="/forgot-password">Esqueçeu sua senha?</ReactLink>
          </RememberMeContainer>
        </AccessContainer>
      </Form>
    </Container>
  );
};

export default SignIn;
