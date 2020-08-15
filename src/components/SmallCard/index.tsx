import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, ItemContainer, ItemText } from './styles';

interface SmallCardProps {
  iconName: string;
  title: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ iconName, title }) => {
  return (
    <Container>
      <ItemContainer>
        <MaterialIcons name={iconName} size={22} color='#fff' />
        <ItemText>{title}</ItemText>
      </ItemContainer>

    </Container>

  )
}

export default SmallCard;