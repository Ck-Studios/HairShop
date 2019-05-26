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
  };

  componentDidMount() {

  }

  toggleDrawer = () => {
    this.setState(prev => ({
      drawerOpen: !prev.drawerOpen
    }));
  };

  updateMenuState = (drawerOpen) => {
    this.setState({drawerOpen});
  };


  render() {
    const {navigation} = this.props;
    const menu = <DrawerMenu/>;
    return (
        <ScrollContainer style={{backgroundColor: 'white',}}>
          <MainTabs navigation={navigation}/>
          <View style={{marginTop: 10}}>
            <Banner/>
          </View>
          <Category navigation={navigation}/>
          <Style navigation={navigation}/>
          <Pick/>
        </ScrollContainer>
    )
  }
}


const HeaderText = styled.Text`
    position: absolute;
    alignSelf: center;
    fontSize: 22;
`;
