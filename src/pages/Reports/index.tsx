import React from 'react';

import {
  FaHotel,
  FaHashtag,
  FaShoppingCart,
  FaDollarSign,
  FaCoins,
  FaRegCalendarAlt,
} from 'react-icons/fa';

import { TableColumn } from '../../components/Table/THead';

import Table from '../../components/Table';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

import { Container, Header } from './styles';

const Reports: React.FC = () => {
  const columns: TableColumn[] = [
    // { label: 'Id', property: 'id' },
    { label: 'Empresa', property: 'enterprise', icon: FaHotel },
    { label: 'Código', property: 'code', icon: FaHashtag },
    {
      label: 'Valor Comprado',
      property: 'value_buyed',
      type: 'money',
      icon: FaShoppingCart,
    },
    {
      label: 'Valor Vendido',
      property: 'value_selled',
      type: 'money',
      icon: FaDollarSign,
    },
    { label: 'Ganho', property: 'gain', type: 'money', icon: FaCoins },
    {
      label: 'Data',
      property: 'created_at',
      type: 'datetime',
      icon: FaRegCalendarAlt,
    },
  ];

  const data = [
    {
      id: 1,
      enterprise: 'ITAU',
      code: 'ITUB1',
      value_buyed: 180,
      value_selled: 182.2,
      gain: 2.2,
      type: 'buy',
      created_at: new Date(),
    },
    {
      id: 2,
      enterprise: 'ITAU',
      code: 'ITUB2',
      value_buyed: 100,
      value_selled: 105.2,
      gain: 5.2,
      type: 'buy',
      created_at: new Date(),
    },
    {
      id: 3,
      enterprise: 'ITAU',
      code: 'ITUB4',
      value_buyed: 200,
      value_selled: 208.2,
      gain: 8.2,
      type: 'sell',
      created_at: new Date(),
    },
    {
      id: 4,
      enterprise: 'ITAU',
      code: 'ITUB4',
      value_buyed: 200,
      value_selled: 209.2,
      gain: 9.2,
      type: 'sell',
      created_at: new Date(),
    },
    {
      id: 5,
      enterprise: 'NuBank',
      code: 'NU1',
      value_buyed: 200,
      value_selled: 208.2,
      gain: 8.2,
      type: 'sell',
      created_at: new Date(),
    },
    {
      id: 6,
      enterprise: 'NuBank',
      code: 'NU2',
      value_buyed: 200,
      value_selled: 209.2,
      gain: 9.2,
      type: 'sell',
      created_at: new Date(),
    },
    // {
    //   id: 5,
    //   enterprise: 'Positivo Info.',
    //   code: 'POSI3',
    //   value_buyed: 380,
    //   value_selled: 382.2,
    //   gain: 2.2,
    //   type: 'buy',
    //   created_at: new Date(),
    // },
    // {
    //   id: 6,
    //   enterprise: 'Positivo Info.',
    //   code: 'POSI3',
    //   value_buyed: 380,
    //   value_selled: 382.2,
    //   gain: 2.2,
    //   type: 'buy',
    //   created_at: new Date(),
    // },
    // {
    //   id: 7,
    //   enterprise: 'Positivo Info.',
    //   code: 'POSI3',
    //   value_buyed: 380,
    //   value_selled: 382.2,
    //   gain: 2.2,
    //   type: 'buy',
    //   created_at: new Date(),
    // },
    // {
    //   id: 8,
    //   enterprise: 'Positivo Info.',
    //   code: 'POSI3',
    //   value_buyed: 380,
    //   value_selled: 382.2,
    //   gain: 2.2,
    //   type: 'buy',
    //   created_at: new Date(),
    // },
    // {
    //   id: 9,
    //   enterprise: 'Positivo Info.',
    //   code: 'POSI3',
    //   value_buyed: 380,
    //   value_selled: 382.2,
    //   gain: 2.2,
    //   type: 'buy',
    //   created_at: new Date(),
    // },
  ];

  return (
    <Container>
      <Header>
        <h1>Relatório</h1>

        <Navbar />
      </Header>

      <Card title="Histórico" width={100}>
        <Table columns={columns} data={data} />
        {/* <Labels>
          <div style={{ marginLeft: 36 }}>
            <FaHotel size={16} color={colors.grayDark} />

            <strong>Empresa</strong>
          </div>

          <div style={{ marginLeft: 74 }}>
            <FaHashtag size={16} color={colors.grayDark} />

            <strong>Código</strong>
          </div>

          <div style={{ marginLeft: 56 }}>
            <FaShoppingCart size={16} color={colors.grayDark} />

            <strong>Valor comprado</strong>
          </div>

          <div style={{ marginLeft: 44 }}>
            <FaDollarSign size={16} color={colors.grayDark} />

            <strong>Valor Vendido</strong>
          </div>

          <div style={{ marginLeft: 58 }}>
            <FaCoins size={16} color={colors.grayDark} />

            <strong>Ganho</strong>
          </div>

          <div style={{ marginLeft: 72 }}>
            <FaCoins size={16} color={colors.grayDark} />

            <strong>Ganho</strong>
          </div>
        </Labels>

        {rows.map(item => (
          <Record key={item.id}>
            <div />

            <Item>
              <h3>{item.enterprise}</h3>
            </Item>

            <Divider />

            <Item>
              <h3>{item.code}</h3>
            </Item>

            <Divider />

            <Item style={{ padding: '0 32px' }}>
              <h3>{item.value_buyed.toFixed(2)} BRL</h3>
            </Item>

            <Divider />

            <Item>
              <h3>{item.value_selled.toFixed(2)} BRL</h3>
            </Item>

            <Divider />

            <Item>
              <h3 style={{ color: colors.greenLight }}>
                {item.gain.toFixed(2)} BRL
              </h3>
            </Item>

            <Divider />

            <Item>
              <h3>{format(item.crated_at, 'dd/MM/yyyy')}</h3>
            </Item>
          </Record>
        ))} */}
      </Card>
    </Container>
  );
};

export default Reports;
