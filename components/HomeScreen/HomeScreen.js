import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../contexts/ThemeContext';

const HomeScreen = () => {
  const isDarkMode = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
      <Text style={{color: isDarkMode ? '#ffffff' : '#000000'}}>
        Welcome to my app
      </Text>
    </View>
  );
};

export default HomeScreen;
