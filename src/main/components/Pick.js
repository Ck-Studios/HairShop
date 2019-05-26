import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import PickItem from '../components/PickItem';
import {RowView, Container, Feed} from "../../common/Theme";

export default class Pick extends Component<Props> {
  state = {
    data: [
      {title: '부러움받는 머릿결', subtitle: '콘디원샷 헤어컨디셔너 증정',},
      {title: '부러움받는 머릿결', subtitle: '콘디원샷 헤어컨디셔너 증정',},
      {title: '부러움받는 머릿결', subtitle: '콘디원샷 헤어컨디셔너 증정',},
      {title: '부러움받는 머릿결', subtitle: '콘디원샷 헤어컨디셔너 증정',},
      {title: '부러움받는 머릿결', subtitle: '콘디원샷 헤어컨디셔너 증정',},
    ]
  };

  render() {
    const {data} = this.state;
    return (
      <View style={{marginTop: 30}}>
        <Feed title={'언니PICK'}>
          <PickList
            data={data}
            horizontal={true}
            showHorizontalIndicator={false}
            renderItem={({item}) =>
              <PickItem
                title={item.title}
                subtitle={item.subtitle}
              />
            }
          />
        </Feed>
      </View>
    )
  }
}

const PickList = styled.FlatList`
`;
