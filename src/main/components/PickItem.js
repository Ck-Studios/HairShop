import React from 'react';
import {Container} from "../../common/Theme";
import {View, Text, StyleSheet} from 'react-native';

export default function PickItem({title, subtitle}) {
  return (
    <Container style={{paddingLeft: 5, paddingRight: 5}}>
      <View style={{backgroundColor: 'black', width: 250, height: 120, paddingLeft: 15, paddingTop: 30}}>
        <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 23}}>{title}</Text>
        <Text style={{color: '#ffffff', fontWeight: '700', fontSize: 15}}>{subtitle}</Text>
      </View>
    </Container>
  )
};
