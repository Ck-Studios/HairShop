import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Container, GrayBorderColor, RowView, Title,} from "../../common/Theme";

export default function Card(props) {
  return (
    <Container style={{backgroundColor: '#ffffff'}}>
      <View style={{height: 50, borderBottomWidth: 1, borderBottomColor: GrayBorderColor, justifyContent: 'center', alignItems: 'center'}}>
      <Title style={{fontWeight: '700'}}>{props.title}</Title>
      </View>
      {props.children}
    </Container>
  )
}
