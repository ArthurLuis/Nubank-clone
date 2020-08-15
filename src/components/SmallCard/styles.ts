import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-right: 10px;
`;

export const ItemContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  margin-left: 12px;
`;

export const ItemText = styled.Text`
  font-size: 12px;
  color: #fff;
  opacity: 0.6;
  max-width: 60px;
`;
