import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, RowView, SearchIcon} from "./Theme";
import Icon from 'react-native-vector-icons/Feather';
import styled from "styled-components/native";

export default function Header({toggleDrawer}) {
  return (
    <RowView style={{zIndex: 1, backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between'}}>
      <HeaderButton onPress={toggleDrawer ? () => toggleDrawer() : null}>
        <Icon name={'menu'} size={25} color={'#ff4253'}/>
      </HeaderButton>
      <View style={{flex: 8, alignSelf: 'stretch', justifyContent: 'center'}}>
        <HeaderText>미용언니</HeaderText>
      </View>
      <HeaderButton>
        <Icon name={'search'} size={25} color={'#ff4253'}/>
      </HeaderButton>
    </RowView>
  )
}

const HeaderButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
    align-self: center;
    font-size: 22;
    font-weight: 700
`;
