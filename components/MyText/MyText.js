import React, {useState} from 'react';
import {Text, View} from 'react-native';
import style from './styles';

const MyText = props => {
  const {name} = props;

  const [text, setText] = useState(0);

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
