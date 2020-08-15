import styled from 'styled-components/native'

export const Container = styled.View`
  width: 92%;
  height: 380px;
  background-color: #fff;
  border-radius: 4px;
  align-self: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const CardHeader = styled.View`
  width: 100%;
  padding: 18px;
  align-self: center;
  justify-content: space-between;
  flex-direction: row; 
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #606060;
`;

export const CardPrice = styled(Text)`
  font-size: 32px;
  color: #2b2b2b;
`;

export const CardContent = styled.View`
  margin-left: 24px;
`;

export const CardFooterText = styled(Text)`
  color: #2b2b2b;
`;

export const CardFooter = styled.View`
  height: 96px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  background-color: rgb(232, 232, 232);
`;
