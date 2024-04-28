import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaView>
      <MyText name="Bob" />
    </SafeAreaView>
  );
};

export default App;
