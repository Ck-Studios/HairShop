import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Container, GrayBorderColor, RegularText} from "../../common/Theme";
import Icon from 'react-native-vector-icons/AntDesign';

export default function StyleItem(props) {
  const {title, subtitle, tags, image, profileImage, like, location, station, toggleLike, id} = props;
  return (
    <TouchableOpacity onPress={() => toggleLike(id)} style={{width: 170, height: 250, margin: 5, position: 'relative'}}>
      <View style={{position: 'absolute', top: 10, left: 10, zIndex: 10}}>
        <Icon name={'heart'} color={like ? '#ff366b' : 'rgba(180,180,180,0.7)'} size={25}/>
      </View>
      <ImageWrapper sytle={{width: 150, height: 100}}>
        <Image source={{uri: image}} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
      </ImageWrapper>

      <TagWrapper>
        <View style={{flex: 2, flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            tags.map(tag => <RegularText>{tag}</RegularText>)
          }
        </View>
        <ViewDivider/>
      </TagWrapper>

      <ShopInfoWrapper>
        <ShopDescriptionWrapper>
          <RegularText>{title}</RegularText>
          <RegularText>{subtitle}</RegularText>
        </ShopDescriptionWrapper>

        <ProfileImageWrapper>
          <Image source={{uri: profileImage}} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
        </ProfileImageWrapper>
      </ShopInfoWrapper>
    </TouchableOpacity>
  )
}

const ViewDivider = styled.View`
  flex: 1;
  width: 100;
  height: 20;
  align-self: stretch;
`;

const ImageWrapper = styled.View`
  flex: 3;
`;
const TagWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 5;
  border-bottom-width: 1;
  border-bottom-color: ${GrayBorderColor}
`;
const ShopInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  padding-top: 10;
  padding-left: 5;
  padding-right: 5;
`;
const ShopDescriptionWrapper = styled.View`
  flex: 1;
`;
const ProfileImageWrapper = styled.View`
  background-color: blue;
  width: 50;
  height: 50;
  border-radius: 25;
  overflow: hidden;
`;
