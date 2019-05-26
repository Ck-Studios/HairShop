import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, RowView} from "../../common/Theme";
import {categories} from "../../client/Store";
import styled from 'styled-components/native'

export default function CategoryTabs(props) {
  return (
    <Container>
      <RowListView
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
          <Category categoryName={item}/>
        }
      />
    </Container>
  )
}

const Category = ({categoryName}) => {
  return (
    <TabButton>
      <Text>{categoryName}</Text>
    </TabButton>
  )
};

const TabButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
  padding-bottom: 10;
`;


const RowListView = styled.FlatList`
  background-color: pink;
`;
