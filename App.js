import * as React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { faGrimace } from '@fortawesome/free-solid-svg-icons'


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#03DAC6' }}>
        <Text style={{fontSize: 50}}>Riize</Text>
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
      <View style={{flex: 1, backgroundColor: '#03DAC6', justifyContent: "center"}}>

        <Text style = {styles.text} >How Are You Feeling?</Text>
        <View style = {styles.emoticons}>
          <View>
            <FontAwesomeIcon icon = {faSmileBeam} color = "yellow" size = {50} />
            <Text style = { {textAlign: 'center', marginTop: 5}}>Happy</Text> 
          </View>

          <View>
            <FontAwesomeIcon icon = {faFrown} color = "yellow" size = {50} />
            <Text style = { {textAlign: 'center', marginTop: 5}}>Sad</Text>
          </View>

          <View>
            <FontAwesomeIcon icon = {faAngry} color = "yellow" size = {50}/>
            <Text style = { {textAlign: 'center', marginTop: 5} }>Mad</Text>
          </View>
           
          <View >
            <FontAwesomeIcon icon = {faGrimace} color = "yellow" size = {50}/>
            <Text style = { {textAlign: 'center', marginTop: 5}}>Scared</Text>
          </View>
         
        </View>
       
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
    emoticons: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 30
    },

    text:{
      fontSize: 30,
      fontFamily: "Futura",
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30
    },

    container: {
        alignContent: "center",
        flexDirection: "row"
    },

    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
});
