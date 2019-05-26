import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Feed, TextButton} from "../../common/Theme";
import StyleItem from './StyleItem';
import styled from 'styled-components/native';

export default class Style extends Component<Props> {
  state = {
    styleCategory: ['헤어', '네일', '휘트니스'],
    data: [
      {type: '헤어', title: '퍼피베이비펌', subtitle: '준오헤어 홍대2호점'},
      {type: '헤어', title: '퍼피베이비펌', subtitle: '준오헤어 홍대2호점'},
      {type: '헤어', title: '퍼피베이비펌', subtitle: '준오헤어 홍대2호점'},
      {type: '헤어', title: '퍼피베이비펌', subtitle: '준오헤어 홍대2호점'},
      {type: '헤어', title: '퍼피베이비펌', subtitle: '준오헤어 홍대2호점'},
    ]
  };

  render() {
    const {data, styleCategory} = this.state;
    const {navigation, shopList} = this.props;
    return (
      <View style={{marginTop: 30}}>
        <Feed
          title={'언니스타일'}
          navigation={navigation}
          routePath={'StyleShopContainer'}
        >
          <StyleTab>
            {
              styleCategory.map(category => (
                <TextButton style={{paddingLeft: 5, paddingRight: 5,}}>
                  <Text style={{fontSize: 17, fontWeight: '500',}}>{category}</Text>
                </TextButton>
              ))
            }
          </StyleTab>
          <StyleList
            data={shopList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>
              <StyleItem
                title={item.title}
                image={item.images}
                subtitle={item.subtitle}
              />
            }
          />
        </Feed>
      </View>
    )
  }
}



const StyleList = styled.FlatList`
`;

const StyleTab = styled.View`
  flex-direction: row;
  padding-top: 5;
  padding-bottom: 15;
`;
