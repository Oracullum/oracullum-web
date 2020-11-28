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
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container color={color} {...rest}>
      <Icon
        size={size}
        color={title === 'light' ? colors.black : colors.white}
      />
      <Bar color={color} />
    </Container>
  );
};

export default ExternalLoginButton;
