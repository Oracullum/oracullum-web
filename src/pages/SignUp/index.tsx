import React, { useContext, useRef, useCallback } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiMail, FiUser, FiEye, FiUserPlus, FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

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

const SignUp: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome de usuário obrigatório')
          .max(150, 'No máximo 150 dígitos!'),
        email: Yup.string()
          .email('Digite um e-mail válido!')
          .required('E-mail obrigatório!'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos!'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current?.setErrors({});

      await api.post('users', data);

      toast.success('Cadastro efetuado com sucesso!');
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

      if (err instanceof Yup.ValidationError) {
        toast.info('Por favor preencha todos os campos obrigatórios!');
      } else {
        toast.error('Ocorreu um erro no cadastro, tente novamente!');
      }
    }
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

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input name="password" icon={FiEye} placeholder="Senha" />

          <ActionButtons>
            <Button type="submit" color={colors.primary}>
              Cadastrar
              <FiUserPlus color={colors.white} size={20} />
            </Button>

            <Link to="/login" outline color={colors.primary}>
              Login
              <FiLogIn color={colors.primary} size={20} />
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

export default SignUp;
