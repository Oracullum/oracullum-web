import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Lottie from 'react-lottie';

import Link from '../../components/Link';

import animationDataDark from '../../assets/hero-dark.json';
import animationDataLight from '../../assets/hero-light.json';
import logoImg from '../../assets/logo.svg';

import { Container, ActionButtons, Hero, TotalConnections } from './styles';

const Landing: React.FC = () => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <img src={logoImg} alt="Mentorando" />

      <p>
        A inteligência artificial nos seus investimentos de forma prática e
        rápida.
      </p>

      <ActionButtons color={colors.black}>
        <Link to="/register" color={colors.black}>
          Inscrever-se
        </Link>

        <Link to="/login" color={colors.black} outline amount={0.3}>
          Fazer login
        </Link>
      </ActionButtons>

      <Hero>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData:
              title === 'light' ? animationDataLight : animationDataDark,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
          }}
          height={600}
          width={600}
        />
      </Hero>

      <TotalConnections>
        <strong>Uma rede com o total de 201 conexões já realizadas!</strong>
      </TotalConnections>
    </Container>
  );
};

export default Landing;
