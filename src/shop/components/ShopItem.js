import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RowView, Container, Title, BoldText, SmallText, RegularText, LargeTitle, Subtitle, RegularGrayColor} from "../../common/Theme";

export default function ShopItem(props) {
  const {images, shop, title, location, type, price, coupon, starRate, reviewCount, interestCount, distance, navigation} = props;
  return (
    <TouchableOpacity style={{marginTop: 15, backgroundColor: '#ffffff', padding: 5}} onPress={() => navigation.navigate('ShopDetailContainer', {props})}>
      <RowView>
        <View style={{width: 120, backgroundColor: 'pink', alignSelf: 'stretch'}}>
          <Image style={{resizeMode: 'cover', height: '100%', width: '100%'}} source={{uri: images[0]}}/>
        </View>
        <View style={{marginLeft: 10,}}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#b4b4b4'}}>
            <LargeTitle>{shop}</LargeTitle>
            <RegularText style={{fontWeight: '700', lineHeight: 18}} color={'#ff3822'}>{title}</RegularText>
            <SmallText style={{lineHeight: 18}}>{location}</SmallText>
            <SmallText style={{lineHeight: 18}}>{type} {price}~</SmallText>
            {
              coupon &&
              <SmallText style={{paddingTop: 5, paddingBottom: 5,}}><Title color={'#4cc7e8'} style={{fontSize: 15, fontWeight: '700'}}>쿠폰</Title> {coupon}</SmallText>
            }
          </View>
          <RowView style={{alignItems: 'center'}}>
            <Icon name={'star'} size={20} color={'#ff4d57'}/>
            <BoldText style={{marginLeft: 5, }}>4.7 <BoldText color={RegularGrayColor}>/</BoldText> </BoldText>
            <BoldText color={RegularGrayColor}>리뷰 <BoldText >{reviewCount}</BoldText> / </BoldText>
            <BoldText color={RegularGrayColor}>관심 <BoldText>{interestCount}</BoldText> </BoldText>
            <BoldText color={'#ff4d57'}>{distance}KM</BoldText>
          </RowView>
        </View>
      </RowView>
    </TouchableOpacity>
  )
};
