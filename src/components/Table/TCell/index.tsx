import React, { useCallback } from 'react';
import { format } from 'date-fns';
import CopyToClipboard from 'react-copy-to-clipboard';

import { toast } from 'react-toastify';
import { TableColumn } from '../THead';

import { Td } from './styles';

interface TCellProps {
  isOperationBuy: 'buy' | 'sell';
  column: TableColumn;
  item: any;
}

const TCell: React.FC<TCellProps> = ({ column, item, isOperationBuy }) => {
  const render = useCallback(() => {
    const { type, property } = column;

    switch (type) {
      case 'date':
        return format(item[property], 'dd/MM/yyyy');

      case 'datetime':
        return format(item[property], 'dd/MM/yyyy HH:mm:ss');

      case 'money':
        return `R$ ${item[property].toFixed(2)} BRL`;

      default:
        return item[property];
    }
  }, [column, item]);

  const onCopy = useCallback((value: any) => {
    toast.dark(`Valor ${value} copiado!`, {
      autoClose: 1500,
      position: 'bottom-right',
      hideProgressBar: true,
    });
  }, []);

  return (
    <CopyToClipboard text={render()} onCopy={() => onCopy(render())}>
      <Td isOperationBuy={isOperationBuy}>
        <span>{render()}</span>
      </Td>
    </CopyToClipboard>
  );
};

export default TCell;
