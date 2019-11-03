import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyScreen from 'react-navigation'
import MyNavigator from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = MyNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = MyScreen(MainNavigator);

export default App;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
        />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', {name: 'Jane'})}
        />
    );
  }
}


