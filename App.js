import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#03DAC6' }}>
        <Text style={{fontSize: 20}}>Rise</Text>
        <Button style={{borderRadius: 40, backgroundColor: '#ffae42'}}
          title="Login"
          onPress={() => this.props.navigation.navigate('Emotions')}
        />
      </View>
    );
  }
}

class EmotionPickerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>How Are You Feeling?</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" onPress = {() => console.log("pressed")}/>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Emotions: EmotionPickerScreen,
  },
  {
    initialRouteName: 'Home',
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
});
