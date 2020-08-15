import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Logo, Name, Top } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Top>
        <Logo source={require('../../../assets/Nubank_Logo.png')} />
        <Name>Arthur</Name>
      </Top>
      <MaterialIcons name='keyboard-arrow-down' size={28} color='#fff' />
    </Container>
  );
};

export default Header;
