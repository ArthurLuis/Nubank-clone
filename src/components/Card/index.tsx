import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  CardHeader,
  CardFooter,
  CardContent,
  CardPrice,
  Text,
  CardFooterText,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <CardHeader>
        <MaterialIcons name='attach-money' size={28} color='#606060' />
        <MaterialIcons name='visibility-off' size={28} color='#606060' />
      </CardHeader>
      <CardContent>
        <Text>Saldo disponível</Text>
        <CardPrice>R$ 1.000.444,00</CardPrice>
      </CardContent>
      <CardFooter>
        <CardFooterText>
          Transferência de R$ 16.000,00 recebida por Squad Ricardo hoje às 14:32
        </CardFooterText>
      </CardFooter>
    </Container>
  );
};

export default Card;
