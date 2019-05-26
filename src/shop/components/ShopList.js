import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {RowView, Container} from "../../common/Theme";
import ShopItem from './ShopItem';

export default class ShopList extends Component<Props> {
  state = {
    data: [
      {
        shop: 'CM3헤어모드 충남대점',
        title: '붙임머리 천연 사용 열펌전문',
        location: '유성온천역 10분거리',
        type: '커트',
        price: '12,000',
        coupon: true,
        couponTitle: '3만원 이상시 10% 할인'
      },
      {
        shop: 'CM3헤어모드 충남대점2',
        title: '붙임머리 천연 사용 열펌전문',
        location: '유성온천역 10분거리',
        type: '커트',
        price: '12,000',
        coupon: true,
        couponTitle: '3만원 이상시 10% 할인'
      },
      {
        shop: 'CM3헤어모드 충남대점3',
        title: '붙임머리 천연 사용 열펌전문',
        location: '유성온천역 10분거리',
        type: '커트',
        price: '12,000',
        coupon: true,
        couponTitle: '3만원 이상시 10% 할인'
      },
      {
        shop: 'CM3헤어모드 충남대점4',
        title: '붙임머리 천연 사용 열펌전문',
        location: '유성온천역 10분거리',
        type: '커트',
        price: '12,000',
        coupon: true,
        couponTitle: '3만원 이상시 10% 할인'
      },
      {
        shop: 'CM3헤어모드 충남대점5',
        title: '붙임머리 천연 사용 열펌전문',
        location: '유성온천역 10분거리',
        type: '커트',
        price: '12,000',
        coupon: true,
        couponTitle: '3만원 이상시 10% 할인'
      },
    ]
  };

  render() {
    // const {data} = this.state;
    const {navigation, data} = this.props;
    return (
      <Container>
        <ListContainer
          data={data}
          renderItem={({item}) =>
            <ShopItem
              navigation={navigation}
              shop={item.title}
              title={item.subtitle}
              location={item.location}
              type={item.option}
              price={item.price}
              coupon={item.coupon}
              starRate={item.rate}
              reviewCount={item.review}
              interestCount={item.interest}
              distance={item.distance}
              images={item.images}
            />
          }
        />
      </Container>
    )
  }
}
const color = '#ededed';
const ListContainer = styled.FlatList`
  background-color: #ededed; 
`;
