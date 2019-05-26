import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, RowView} from "../../common/Theme";
import styled from 'styled-components/native';

export default function StyleItem({title, subtitle}) {
  return (
    <Container style={{width: 140, height: 170, paddingRight: 10, paddingLeft: 10}}>
      <View style={{flex: 1, width: 120, height: 130, borderWidth: 1, borderColor: '#9c9c9c'}}/>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 15, fontWeight: '700',}}>{title}</Text>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#9c9c9c', paddingTop: 5,}}>{subtitle}</Text>
      </View>
    </Container>
  )
}
