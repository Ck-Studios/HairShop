import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const RegularGrayColor = '#6f6f6f';
export const GrayBorderColor = '#cacaca';
export const LightGrayColor = '#e2e2e2';
export const BlackColor = '#000000';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const HeaderWrapper = styled.View`
  height: 60;
`;

export const BaseCardLayout = styled.View`
  flex: 1;
`;

export const TextButton = styled.TouchableOpacity`
  font-size: 17;
  font-weight: 500;
`;

export const RoundedImageLayout = styled.View`
  width: 54;
  height: 54;
  border-radius: 27;
`;

export const FeedLayout = styled.View`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
`;

export const RowView = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const LargeTitle = styled.Text`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 20;
  font-weight: 600;
`;

export const Title = styled.Text`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 17;
  font-weight: 500;
`;

export const RegularText = styled.Text`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 14;
`;

export const BoldText = styled(RegularText)`
  font-weight: 700;
`;

export const SmallText = styled.Text`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 12;
`;

export const Subtitle = styled.Text`
  color: ${props => props.color ? props.color : 'black'};
  font-size: 17;
  font-weight: 600;
`;

export const Feed = ({title, children, navigation, routePath}) => {
  return (
    <FeedLayout>
      <RowView style={{justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>{title}</Text>
        <TouchableOpacity onPress={routePath ? () => navigation.navigate(routePath) : null}>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#a8a8a8'}}>전체 보기></Text>
        </TouchableOpacity>
      </RowView>
      <View style={{paddingTop: 20,}}>
        {children}
      </View>
    </FeedLayout>
  )
};
