import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import useToggle from './custom-hooks/useToggle';

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <SafeAreaView>
      <Text>{isOn ? 'ON' : 'OFF'}</Text>
      <Button title={'Toggle'} onPress={toggleIsOn} />
    </SafeAreaView>
  );
};

export default App;
