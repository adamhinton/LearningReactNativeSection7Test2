import React from 'react';
import {Text, View} from 'react-native';
import style from './styles';

const MyText = props => {
  const {name} = props;

  const onPress = () => alert('You just pressed the text component');

  return (
    <View>
      <Text onPress={onPress} style={style.text}>
        Hello, {name}
      </Text>
    </View>
  );
};

export default MyText;
