/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
          <Button title={'Switch mode'} onPress={toggleTheme} />
          <Text>Hello, World!</Text>
        </View>
        <HomeScreen />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
