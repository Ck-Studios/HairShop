import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {RowView, Container, RoundedImageLayout} from "./Theme";

export default class ShortProfile extends Component<Props> {
  state = {
    signIn: false,
  };

  render() {
    const {signIn} = this.state;
    return (
      <Container>
        <RowView>
          <RoundedImageLayout style={{backgroundColor: 'red',}}/>
          {
            signIn ?
              <View style={{paddingLeft: 10}}>
                <Text>로그인 된 유저입니다.</Text>
              </View>
            :
              <View style={{paddingLeft: 10, justifyContent: 'center'}}>
                <GrayText>로그인 / 회원가입</GrayText>
                <ShortProfileText><BoldText>회원가입</BoldText>을 하시면</ShortProfileText>
                <ShortProfileText>할인쿠폰과<BoldText> 혜택</BoldText>을 받을 수 있어요!</ShortProfileText>
              </View>
          }
        </RowView>
      </Container>
    )
  }
}

const ShortProfileText = styled.Text`
  font-size: 13;
`;

const GrayText = styled(ShortProfileText)`
  font-weight: 700;
  color: #878787;
`;

const BoldText = styled(ShortProfileText)`
  font-weight: 700;
`;
