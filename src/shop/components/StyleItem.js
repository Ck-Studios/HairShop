import React from 'react';
import styled from 'styled-components/native';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Container, RegularText} from "../../common/Theme";

export default function StyleItem(props) {
  const {title, subtitle, tags, image, profileImage, like, location, station} = props;
  return (
    <Container>
      <TouchableOpacity>
        <ImageWrapper>
          <Image source={{uri: image}} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
        </ImageWrapper>

        <TagWrapper>
          {
            tags.map(tag => <RegularText>{tag}</RegularText>)
          }
        </TagWrapper>

        <ShopInfoWrapper>
          <ShopDescriptionWrapper>
            <RegularText>{title}</RegularText>
            <RegularText>{subtitle}</RegularText>
          </ShopDescriptionWrapper>

          <ProfileImageWrapper>
            <Image source={{uri: profileImage}} style={{width: '100%', height: '100%', resizeMode: 'contain'}}/>
          </ProfileImageWrapper>
        </ShopInfoWrapper>
      </TouchableOpacity>
    </Container>
  )
}

const ImageWrapper = styled.View`
  width: 100%;
  background-color: blue;
`;
const TagWrapper = styled.View`
`;
const ShopInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
const ShopDescriptionWrapper = styled.View``;
const ProfileImageWrapper = styled.View``;
