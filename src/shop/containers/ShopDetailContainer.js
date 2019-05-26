import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import styled from 'styled-components/native';
import {
  RowView,
  Container,
  ScrollContainer,
  RegularText,
  SmallText,
  LargeTitle,
  RegularGrayColor,
  BoldText, Title, GrayBorderColor, BlackColor, LightGrayColor,
} from "../../common/Theme";
import Card from '../components/Card';
import Icon from "react-native-vector-icons/FontAwesome";

const {width, height} = Dimensions.get('window');

export default class ShopDetailContainer extends Component<Props> {
  state = {
    categories: [
      {category: '메뉴', subMenu: ['이벤트 티켓', '커트', '펌', '컬러']},
      {category: '스타일', subMenu: ['이벤트 티켓2', '커트', '펌', '컬러']},
      {category: '정보', subMenu: ['이벤트 티켓3', '커트', '펌', '컬러']},
      {category: '리뷰', subMenu: ['이벤트 티켓4', '커트', '펌', '컬러']},
    ],
    indicator: '메뉴',
    currentIndex: 0,
  };

  _onSelectCategory = (menu, index) => {
    this.setState({
      indicator: menu,
      currentIndex: index,
    })
  };

  render() {
    const {navigation} = this.props;
    const {categories, indicator, currentIndex} = this.state;
    const {title, location, type, price, shop,images} = navigation.getParam('props');

    return (
      <ScrollContainer style={{backgroundColor: LightGrayColor}}>
        <ShopInfoContainer>
          <Carousel
            style={{width: width, height: 300}}
            autoplay={false}
          >
            {
              images.map(image =>
              <Container>
                <Image source={{uri: image}} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
              </Container>
              )
            }
            <Container style={{backgroundColor: 'pink',}}><Text>Screen 1</Text></Container>
            <Container style={{backgroundColor: 'blue',}}><Text>Screen 2</Text></Container>
            <Container style={{backgroundColor: 'green',}}><Text>Screen 3</Text></Container>
          </Carousel>

          <ShopInfo>
            <LargeTitle>{shop}</LargeTitle>
            <RegularText style={{fontSize: 16, fontWeight: '700', lineHeight: 18}}
                         color={'#ff3822'}>{title}</RegularText>
            <SmallText style={{fontSize: 14, lineHeight: 18}}>{location}</SmallText>
            <SmallText style={{fontSize: 14, lineHeight: 18}}>{type} {price}~</SmallText>
            <RowView style={{alignItems: 'center'}}>
              <Icon name={'star'} size={20} color={'#ff4d57'}/>
              <BoldText style={{marginLeft: 5,}}>4.7 <BoldText color={RegularGrayColor}>/</BoldText> </BoldText>
              <BoldText color={RegularGrayColor}>리뷰 <BoldText>518</BoldText> / </BoldText>
              <BoldText color={RegularGrayColor}>관심 <BoldText>503</BoldText> </BoldText>
              <BoldText color={'#ff4d57'}>1.2KM</BoldText>
            </RowView>
          </ShopInfo>

          <ButtonWrapper>
            <CallButton>
              <Title>전화하기</Title>
            </CallButton>

            <CouponButton>
              <Title>쿠폰</Title>
            </CouponButton>
          </ButtonWrapper>
        </ShopInfoContainer>

        <RowView style={{justifyContent: 'space-between', backgroundColor: '#ffffff'}}>
          {
            categories.map((tab, index) => {
              return (
                <Category
                  categoryName={tab.category}
                  selected={indicator}
                  index={index}
                  onPress={this._onSelectCategory}
                />
              )
            })
          }
        </RowView>
        <RowView style={{marginBottom: 10}}>
          {
            categories[currentIndex].subMenu.map(menu => (
              <SubMenu menu={menu}/>
            ))
          }
        </RowView>

        <Card title={'이벤트 티켓'}>
          <View style={{flex: 1, height: 200, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#6af59a', fontSize: 20, fontWeight: '700'}}>진행중인 이벤트가 없습니다.</Text>
          </View>
        </Card>
      </ScrollContainer>
    )
  }
}

const SubMenu = ({menu}) => {
  return (
    <SubMenuButton>
      <Text>{menu}</Text>
    </SubMenuButton>
  )
};

const Category = ({categoryName, onPress, index, selected}) => {
  return (
    <TabButton selected={selected === categoryName} onPress={() => onPress(categoryName, index)}>
      <Text>{categoryName}</Text>
    </TabButton>
  )
};

const TabButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 20;
  padding-right: 20;
  padding-top: 15;
  padding-bottom: 15;
  border-bottom-width: 2;
  border-bottom-color: ${props => props.selected ? BlackColor : GrayBorderColor};
`;

const SubMenuButton = styled(TabButton)`
  padding-left: 10;
  padding-right: 10;
  border-bottom-width: 0;
`;

const ShopInfo = styled.View`
  padding-top: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const ButtonWrapper = styled.View`
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 20;
`;

const CallButton = styled.TouchableOpacity`
  flex: 1;
  padding-top: 20;
  padding-bottom: 20;
  border-radius: 5;
  justify-content: center;
  border-width: 1;
  border-color: #cecece;
  align-items: center;
`;

const CouponButton = styled(CallButton)`
  flex-direction: row;
  margin-top: 10;
`;

const ShopInfoContainer = styled(Container)`
  background-color: #ffffff;
`;
