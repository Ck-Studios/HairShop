import React, {Component} from 'react';
import {Text, ScrollView, View, Image, Dimensions, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {RowView, Container} from "./Theme";
import ShortProfile from './ShortProfile';
import styled from 'styled-components/native';

const window = Dimensions.get('window');

export default class DrawerMenu extends Component<Props> {
  state = {
    menuList: [
      {title: '예약내역 / 구매취소'},
      {title: '내쿠폰'},
      {title: '관심'},
      {title: '문의'},
      {title: '공지사항'},
    ]
  };

  render() {
    const {menuList} = this.state;
    return (
      <Container>
        <ScrollView scrollsToTop={false} style={styles.menu}>
          <TouchableOpacity style={styles.avatarContainer}>
            <ShortProfile/>
          </TouchableOpacity>
          {
            menuList.map(menu => (
              <Menu onPress={() => Alert.alert('로그인을 해주세요!')}>
                <Text style={styles.item}>
                  {menu.title}
                </Text>
              </Menu>
            ))
          }
        </ScrollView>
      </Container>
    )
  }
}

const Menu = styled.TouchableOpacity`
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 20;
  padding-right: 20;
  border-bottom-width: 1;
  border-bottom-color: #c5c5c5;
`;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    // height: window.height,
    backgroundColor: 'white',
    padding: 10,
  },
  avatarContainer: {
    paddingBottom: 10,

    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 24,
    backgroundColor: 'red',
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 17,
    fontWeight: '500',
    color: '#565656',
  },
});
