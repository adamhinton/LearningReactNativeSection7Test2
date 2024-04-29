import React, {useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button} from 'react-native';

const App = () => {
  let array = Array(1000).fill(0);

  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* UseRef is used to store a reference to a value; in this case the value is this scrollView component */}
      <ScrollView ref={scrollViewRef}>
        {array.map((elem, idx) => (
          <Text key={idx}>Hello, world! {idx} </Text>
        ))}
      </ScrollView>
      <Button onPress={handleClick} title={'Scroll To Top'} />
    </SafeAreaView>
  );
};

export default App;
