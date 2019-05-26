import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Container} from "../../common/Theme";

export default class Banner extends Component<Props> {
  state = {};

  render() {
    return(
      <Container style={{height: 180, backgroundColor: 'red'}}>
        <Image source={require('../../../assets/banner.png')} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
      </Container>
    )
  }
}
