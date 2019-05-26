import React from 'react';
import {createAppContainer, createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerItems} from 'react-navigation';
import {Dimensions, StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {Header} from 'react-navigation';
import MainContainer from '../main/containers/MainContainer';
import CategoryShopContainer from '../shop/containers/CategoryShopContainer';
import ProfileContainer from '../profile/containers/ProfileContainer';
import ShopDetailContainer from '../shop/containers/ShopDetailContainer';
import LocationContainer from '../location/containers/LocationContainer';
import StyleShopContainer from '../shop/containers/StyleShopContainer';
import DrawerMenu from '../common/DrawerMenu';

const {width, height} = Dimensions.get('window');

const RootTab = createMaterialTopTabNavigator({
  MainContainer: {
    screen: MainContainer,
  },
}, {
  swipeEnabled: true,
  // tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: false,
    showLabel: false,
    labelStyle: {
      color: '#b1acae'
    },
    style: {
      backgroundColor: 'white',
    },
    indicatorStyle: {
      opacity: 0,
    }
  }
});

const AppNavigator = createStackNavigator({
  RootTab,
  ProfileContainer,
  CategoryShopContainer,
  ShopDetailContainer,
  LocationContainer,
  StyleShopContainer
}, {
  initialRouteName: 'RootTab',
  headerMode: 'none',
  defaultNavigationOptions: {
    // headerTitle: (
    //   <View style={{flexDirection: 'row', alignItems: 'center', flex: 1, }}>
    //     <Text style={{fontSize: 17, color: 'black'}}>미용언니</Text>
    //     <View></View>
    //   </View>
    // ),
    // headerStyle: {
    //   justifyContent: 'flex-start',
    //   // height: Header.HEIGHT * 0.3,
    // }
  }
});

// const AppDrawerNavigator = createDrawerNavigator({
//
// });

export const AppContainer = createAppContainer(AppNavigator);
