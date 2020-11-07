import React, { useContext } from 'react';
import { IconBaseProps } from 'react-icons';
import { ThemeContext } from 'styled-components';

import { Container, Bar } from './styles';

interface ExternalLoginButtonProps {
  size: number;
  color: string;
  icon: React.ComponentType<IconBaseProps>;
}

const ExternalLoginButton: React.FC<ExternalLoginButtonProps> = ({
  size,
  color,
  icon: Icon,
  ...rest
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container color={color} {...rest}>
      <Icon size={size} color={colors.black} />
      <Bar color={color} />
    </Container>
  );
};

export default ExternalLoginButton;
