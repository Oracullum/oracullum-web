import React, { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion';
// import { ThemeContext } from 'styled-components';

import Navbar from '../../components/Navbar';
import api from '../../services/api';

import { useAuth } from '../../context/AuthContext';

import { Container, Header, Items } from './styles';

const Exchanges: React.FC = () => {
  const { token } = useAuth();

  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    async function loadExchanges() {
      const response = await api.get('stocks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setExchanges(response.data);
    }
    loadExchanges();
  }, [token]);

  return (
    <Container>
      <Header>
        <h1>Minhas Ações</h1>

        <Navbar />
      </Header>

      <Items>
        {exchanges.map((item: any) => (
          <Accordion
            name={item.exchanges.exchange.name}
            enterprise={item.exchanges.exchange.enterprise.name}
            quantity={item.exchanges.quantity}
            historics={item.exchanges.historic_transactional}
            setExchanges={setExchanges}
            exchange_id={item.exchanges.id}
            key={item.id}
          />
        ))}
      </Items>
    </Container>
  );
};
export default Exchanges;
