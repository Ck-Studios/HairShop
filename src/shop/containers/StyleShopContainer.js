import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Container, RowView, ScrollContainer} from "../../common/Theme";
import styled from 'styled-components/native';
import StyleList from '../components/StyleList';
import {axiosClient} from "../../client/AxiosClient";

export default class StyleShopContainer extends Component<Props> {
  state = {
    shopList: null,
  };

  componentDidMount() {
    const self = this;

    axiosClient.get('styles')
      .then(res => {
        self.setState({
          shopList: res.data,
        })
      })
      .catch(err => console.warn(err));
  }

  render() {
    const {shopList} = this.state;

    return (
      <Container>
        <Text>StyleShopContainer</Text>
        <ScrollContainer>
          <StyleList
            shopList={shopList}
          />
        </ScrollContainer>
      </Container>
    )
  }
}
