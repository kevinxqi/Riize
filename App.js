import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native';
import { faGrimace } from '@fortawesome/free-solid-svg-icons'


class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./ScreenImages/LoginScreen.jpg')} style={styles.container}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 50, color: 'white' }}>Riize</Text>
          <View style={{ alignSelf:'baseline'}}>
          <TouchableOpacity >
            <Text style={styles.button}>Log-In</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground >

    );
  }
}

class EmotionPickerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#03DAC6', justifyContent: "center" }}>

        <Text style={styles.text} >How Are You Feeling?</Text>
        <View style={styles.emoticons}>
          <View>
            <FontAwesomeIcon icon={faSmileBeam} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color:'white' }}>Happy</Text>
          </View>

          <View>
            <FontAwesomeIcon icon={faFrown} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }}>Sad</Text>
          </View>

          <View>
            <FontAwesomeIcon icon={faAngry} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }}>Mad</Text>
          </View>

          <View >
            <FontAwesomeIcon icon={faGrimace} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }}>Scared</Text>
          </View>

        </View>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Emotions: EmotionPickerScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  emoticons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30
  },

  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: "Futura",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  button: {
    backgroundColor: '#f0c311',
    // borderColor: 'white',
    // borderWidth: 1,
    borderRadius: 18,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'visible',
    padding: 15,
    marginTop: 500,
    width: 100,
    textAlign:'center',
  }
});
