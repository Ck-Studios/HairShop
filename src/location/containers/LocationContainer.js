import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {Container, RowView} from "../../common/Theme";
import MapView from 'react-native-maps';

export default class LocationContainer extends Component<Props> {
  state = {

  };

  render() {
    return(
      <Container>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showUserLocation={true}
        />
      </Container>
    )
  }
}
