import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from "../../common/Theme";

export default class Banner extends Component<Props> {
  state = {};

  render() {
    return(
      <Container style={{height: 180, backgroundColor: 'red'}}>
        <Text>Banner</Text>
      </Container>
    )
  }
}
