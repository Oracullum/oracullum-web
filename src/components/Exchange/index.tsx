import React, { useContext } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';

import { Container, Item, Divider } from './styles';

interface ActionProps {
  actionName: string;
  companyName: string;
  initialValue: number;
  stopValue: number;
}

const Action: React.FC<ActionProps> = ({
  actionName,
  companyName,
  initialValue,
  stopValue,
}) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <div />

      <Item>
        <h3>{actionName}</h3>
        <p>{companyName}</p>
      </Item>

      <Divider />

      <Item>
        <h3>{initialValue} BRL</h3>
        <p>Stop: {stopValue}</p>
      </Item>

      <FaChevronRight
        size={18}
        color={title === 'light' ? colors.black : colors.white}
      />
    </Container>
  );
};

export default Action;
