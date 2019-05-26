import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, RowView} from "../../common/Theme";
import {categories} from "../../client/Store";
import styled from 'styled-components/native';

export default class Category extends Component<Props> {
  state = {
    categories
  };

  render() {
    const {categories} = this.state;
    const {navigation} = this.props;

    return (
      <Container>
        <RowView style={{flexWrap: 'wrap'}}>
          {
            categories.map(category => (
              <CategoryButton onPress={() => navigation.navigate('CategoryShopContainer', {type: 'category', selectedCategory: category})}>
                <Text>{category}</Text>
              </CategoryButton>
            ))
          }
        </RowView>
      </Container>
    )
  }
}

const CategoryButton = styled.TouchableOpacity`
  padding-top: 10;
  padding-bottom: 10;
  justify-content: center;
  width: 125;
  height: 50;
  align-items: center;
`;
