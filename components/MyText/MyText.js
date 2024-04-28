import React from 'react';
import {Text, View} from 'react-native';
import style from './styles';

const MyText = props => {
  const {name} = props;

  return (
    <View>
      <Text style={style.text}>Hello, {name}</Text>
    </View>
  );
};

export default MyText;
