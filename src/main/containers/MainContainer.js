import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, Dimensions} from 'react-native';
import Header from '../../common/Header';
import styled from 'styled-components/native';
import {Container, ScrollContainer, HeaderWrapper} from "../../common/Theme";
import Style from '../components/Style';
import Banner from '../components/Banner';
import Category from '../components/Category';
import Pick from '../components/Pick';
import MainTabs from '../../common/MainTabs';
import SideMenu from 'react-native-side-menu';
import DrawerMenu from '../../common/DrawerMenu';
import Tab from 'react-native-tabs';
import {axiosClient} from "../../client/AxiosClient";

const {width, height} = Dimensions.get('window');
const DRAWER_MENU_WIDTH = width * 0.75;

export default class MainContainer extends Component<Props> {
  state = {
    drawerOpen: false,
    styleShopList: null,
  };

  componentDidMount() {
    const self = this;

    axiosClient.get('styles')
      .then(res => {
        self.setState((prev) => ({styleShopList: res.data, load: true}))
      })
      .catch(err => console.warn(err))
  }

  render() {
    const {navigation} = this.props;
    const {styleShopList} = this.state;
    const menu = <DrawerMenu/>;
    return styleShopList ?
      (
        <ScrollContainer style={{backgroundColor: 'white',}}>
          <Container>
            <MainTabs navigation={navigation}/>
            <View style={{marginTop: 10}}>
              <Banner/>
            </View>
            <Category navigation={navigation}/>
            <Style
              shopList={styleShopList}
              navigation={navigation}
            />
            <Pick/>
          </Container>
        </ScrollContainer>
      )
      :
      <View><Text>Loading</Text></View>
  }
}


const HeaderText = styled.Text`
    position: absolute;
    alignSelf: center;
    fontSize: 22;
`;
