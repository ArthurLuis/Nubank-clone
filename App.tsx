import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import React from 'react';

import Header from './src/components/Header';
import SmallCard from './src/components/SmallCard';
import Card from './src/components/Card';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'rgb(109,17,159)'} style='light' />
      <Screen>
        <Header />
        <Card />
        <Menu
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
        >
          <SmallCard title='Indicar amigo' iconName='person-add' />
          <SmallCard title='Cobrar' iconName='chat-bubble-outline' />
          <SmallCard title='Depositar' iconName='arrow-downward' />
          <SmallCard title='Transferir' iconName='arrow-upward' />
          <SmallCard title='Me Ajuda' iconName='help-outline' />
          <SmallCard title='Pagar' iconName='payment' />
          <SmallCard title='Bloquear cartão' iconName='lock-open' />
          <SmallCard title='Organizar atalhos' iconName='filter-list' />
        </Menu>
      </Screen>
    </>
  );
}

const Screen = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight}px;
  background-color: rgb(109, 17, 159);
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ScrollView`
  flex-direction: row;
  margin-top: 30px;
  max-height: 130px;
`;
