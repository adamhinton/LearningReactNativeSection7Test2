import {Text, View} from 'react-native';

const MyText = (props) => { 

    const {name} = props;

    return (
        <View>
            <Text>Hello, {name}</Text>
        </View>
    );
};

export default MyText;