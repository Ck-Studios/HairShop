import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, RowView} from './Theme';
import styled from 'styled-components/native';

export default function MainTabs({navigation}) {
  return (
    <RowView>
      <Tab onPress={() => navigation.navigate('CategoryShopContainer')} style={{borderRightWidth: 1, borderRightColor: '#d6d6d6'}}>
        <TabText>스타일</TabText>
      </Tab>
      <Tab onPress={() => navigation.navigate('ProfileContainer')}>
        <TabText>마이페이지</TabText>
      </Tab>
    </RowView>
  )
}


const TabText = styled.Text`
  font-size: 17;
  font-weight: 700;
  color: #b2b2b2; 
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 35;
`;
