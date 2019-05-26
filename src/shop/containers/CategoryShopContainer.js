import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ShopList from '../components/ShopList';
import Header from '../../common/Header';
import {
  Container,
  RowView,
  HeaderWrapper,
  RegularText,
  SmallText,
  ScrollContainer,
  GrayBorderColor
} from "../../common/Theme";
import CategoryTabs from '../components/CategoryTabs';
import {axiosClient} from "../../client/AxiosClient";

export default class CategoryShopContainer extends Component<Props> {
  state = {
    categories: ['내주변 쿠폰', '이벤트 티켓', '피부과', '치과', '에스테틱', '헤어샵', '네일샵', '휘트니스', '왁싱 속눈썹'],
    optionFilter: ['인기순', '거리순', '가격순'],
    distanceFilter: ['3Km', '5Km', '10Km'],
    selectedCategory: '내주변 쿠폰',
    selectedOption: '인기순',
    selectedDistance: '3Km',
    shopList: null,
  };

  componentDidMount() {
    const self = this;
    axiosClient.get('shops')
      .then(res => {
        self.setState(() => ({
          shopList: res.data,
        }))
      })
      .catch(err => {
        console.warn(err);
      })
  };

  _onSelectCategory = (menu) => {
    this.setState({
      selectedCategory: menu,
    })
  };

  _onSelectOption = (option) => {
    this.setState({
      selectedOption: option,
    })
  };

  _onSelectDistance = (distance) => {
    this.setState({
      selectedDistance: distance,
    })
  };

  _renderFilterTabs = () => {
    const option = this.state.selectedOption;
    return (
      <TabContainer>
        <Container>
          <SmallText>내 주변 3Km 이내의 헤어샵 87개</SmallText>
        </Container>
        <RowView style={{justifyContent: 'space-around', alignItems: 'center', alignSelf: 'stretch'}}>
          {
            this.state.optionFilter.map((filter, index) => {
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
        data={this.state.categories}
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

  render() {
    const {navigation} = this.props;
    const {shopList} = this.state;
    return (
      <Container style={{backgroundColor: '#d3d3d3'}}>
        <ScrollContainer>
          {this._renderCategoryTabs()}
          {this._renderLocationIndicatorTabs()}
          {this._renderFilterTabs()}
          <ShopList
            navigation={navigation}
            data={shopList}
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


const RowListView = styled.FlatList`
  max-height: 50;
  background-color: #ffffff;
`;

const DistanceTab = styled.TouchableOpacity`
  justify-content: center;
  align-self: stretch;
  border-bottom-width: ${props => props.selected ? 2 : 0};
  border-bottom-color: red;
`;

