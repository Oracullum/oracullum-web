import React from 'react';

import { Container } from './styles';

// { children, isOpen, toggle }
const Modal: React.FC = () => {
  return (
    <Container>
      {/* <ModalContainer isOpen={isOpen} toggle={toggle}>
        <ModalBody>{children}</ModalBody>
      </ModalContainer> */}
    </Container>
  );
};

export default Modal;
