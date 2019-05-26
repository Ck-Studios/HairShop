import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Container, RegularText, RowView, ScrollContainer, SmallText} from "../../common/Theme";
import styled from 'styled-components/native';
import StyleList from '../components/StyleList';
import {axiosClient} from "../../client/AxiosClient";

export default class StyleShopContainer extends Component<Props> {
  state = {
    styleCategories: ['헤어', '네일', '휘트니스'],
    styleFilter: ['커트', '펌', '염색', '스타일링', '메이크업'],
    distanceFilter: ['3Km', '5Km', '10Km'],
    selectedCategory: '헤어',
    selectedStyle: '커트',
    shopList: null,
  };

  _onSelectCategory = (menu) => {
    this.setState({
      selectedCategory: menu,
    })
  };

  _onSelectOption = (option) => {
    this.setState({
      selectedStyle: option,
    })
  };

  _toggleLike = (id) => {
    const newList = this.state.shopList.map(item => {
      return item.id === id ?
        Object.assign({}, item, {like: !item.like}) : item;
    });

    this.setState({
      shopList: newList,
    })
  };


  _renderFilterTabs = () => {
    const option = this.state.selectedStyle;
    return (
      <TabContainer>
        <RowView style={{justifyContent: 'space-around', alignItems: 'center', alignSelf: 'stretch'}}>
          {
            this.state.styleFilter.map((filter, index) => {
              return (
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    paddingBottom: 8,
                    borderBottomWidth: option === filter ? 2 : 0,
                    borderBottomColor: 'red'
                  }}
                  onPress={() => this._onSelectOption(filter)}
                >
                  <Text>{filter}</Text>
                </TouchableOpacity>
              )
            })
          }
        </RowView>
      </TabContainer>
    )
  };

  _renderLocationIndicatorTabs = () => {
    const {navigation} = this.props;
    return (
      <RowView style={{
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}>
        <Container>
          <Text>대전 서구 월평중로24번길 22</Text>
        </Container>
        <RowView style={{justifyContent: 'space-around', alignItems: 'center'}}>
          {
            this.state.distanceFilter.map((distance, index) => {
              return (
                <DistanceTab
                  onPress={() => this._onSelectDistance(distance)}
                  selected={distance === this.state.selectedDistance}
                  key={index.toString()}
                >
                  <Text>{distance}</Text>
                </DistanceTab>
              )
            })
          }
          <TouchableOpacity
            onPress={() => navigation.navigate('LocationContainer')}
            style={{
              width: 50,
              height: 30,
              borderWidth: 1,
              borderColor: '#ff5b67',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <RegularText color={'#ff5b67'}>지도</RegularText>
          </TouchableOpacity>
        </RowView>
      </RowView>
    )
  };

  _renderCategoryTabs = () => {
    return (
      <RowListView
        data={this.state.styleCategories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
          <Category
            onPress={this._onSelectCategory}
            selected={item === this.state.selectedCategory}
            categoryName={item}/>
        }
      />
    )
  };

  componentDidMount() {
    const self = this;

    axiosClient.get('styles')
      .then(res => {
        self.setState({
          shopList: res.data,
        })
      })
      .catch(err => console.warn(err));
  }

  render() {
    const {shopList} = this.state;

    return (
      <Container>
        {this._renderCategoryTabs()}
        {this._renderFilterTabs()}
        <ScrollContainer>
          <StyleList
            toggleLike={this._toggleLike}
            shopList={shopList}
          />
        </ScrollContainer>
      </Container>
    )
  }
}

const Category = ({categoryName, onPress, selected}) => {
  return (
    <TabButton
      selected={selected}
      onPress={() => onPress(categoryName)}
    >
      <Text>{categoryName}</Text>
    </TabButton>
  );
};

const TabButton = styled.TouchableOpacity`
  width: 100;
  justify-content: center;
  align-items: center;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
  padding-bottom: 10;
  border-bottom-width: ${props => props.selected ? 2 : 1};
  border-bottom-color: ${props => props.selected ? '#000000' : '#7b7b7b'};
`;

const TabContainer = styled.View`
  flex-direction: row;
  height: 50;
  padding-left: 10;
  padding-right: 10;
  justify-content: space-between;
  align-items: center;
`;

const DistanceTab = styled.TouchableOpacity`
  justify-content: center;
  align-self: stretch;
  border-bottom-width: ${props => props.selected ? 2 : 0};
  border-bottom-color: red;
`;


const RowListView = styled.FlatList`
  max-height: 50;
  background-color: #ffffff;
`;
