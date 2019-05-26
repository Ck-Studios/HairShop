import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
import StyleItem from './StyleItem';
import {Container, RowView} from "../../common/Theme";

const {width, height} = Dimensions.get('window');

export default function StyleList(props) {
  const {shopList} = props;
  return (
    <Container>
      <ShopList
        data={shopList}
        contentContainerStyle={{width: (width * 0.45), height: height * 0.25, margin: 4, backgroundColor: 'pink'}}
        numColumns={2}
        renderItem={({item}) =>
          <StyleItem
            title={item.title}
            subtitle={item.subtitle}
            tags={item.tags}
            image={item.images}
            profileImage={item.profile_images}
            like={item.like}
            location={item.location}
            station={item.station}
          />
        }
      />
    </Container>
  )
}

const ShopList = styled.FlatList`
`;
