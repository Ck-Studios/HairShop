/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppContainer} from "./src/client/Navigation";
import {Dimensions, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SideMenu from "react-native-side-menu";
import Header from "./src/common/Header";
import DrawerMenu from './src/common/DrawerMenu';
import {Container} from "./src/common/Theme";
import {HeaderWrapper} from "./src/common/Theme";
import {axiosClient} from "./src/client/AxiosClient";

const {width, height} = Dimensions.get('window');
const DRAWER_MENU_WIDTH = width * 0.75;

type Props = {};
export default class App extends Component<Props> {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState(prev => ({
      drawerOpen: !prev.drawerOpen
    }));
  };

  updateMenuState = (drawerOpen) => {
    this.setState({drawerOpen});
  };

  componentDidMount() {
    const self = this;

    axiosClient.get('styles')
      .then(res => {
        self.setState({styleShopList: res.data})
      })
      .catch(err => console.warn(err))
  }

  render() {
    const {drawerOpen} = this.state;
    const menu = <DrawerMenu/>;
    return (
      <SafeAreaView style={styles.container}>
        <Container>
          <SideMenu
            menu={menu}
            isOpen={drawerOpen}
            onChange={drawerOpen => this.updateMenuState(drawerOpen)}
            openMenuOffset={DRAWER_MENU_WIDTH}
          >
            {
              drawerOpen &&
              <View
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0.4
                }}
              />
            }
            <HeaderWrapper>
              <Header
                toggleDrawer={this.toggleDrawer}
              />
            </HeaderWrapper>

            <AppContainer/>
          </SideMenu>
        </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    zIndex: 5,
  },
});
