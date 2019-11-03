import * as React from 'react';
import { WebView, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { TouchableOpacity } from 'react-native';
import { faGrimace } from '@fortawesome/free-solid-svg-icons'
import * as Font from 'expo-font';
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import AppLoading from "expo/build/launch/AppLoading";



class HomeScreen extends React.Component {

  componentDidMount() {
    console.log("started");
    Font.loadAsync({
      'McLaren': require('./assets/fonts/McLaren-Regular.ttf'),
    }).then(r => { this.setState({ fontLoaded: true });});
  }

  state = {
    fontLoaded: false,
  };


  render() {
    console.log("ready");
    console.log(this.state.fontLoaded);
    // if (this.state.fontLoaded) {
    if(this.state.fontLoaded) {
      return (

          <ImageBackground source={require('./ScreenImages/LoginScreen.jpg')} style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 50, color: 'white', fontFamily: "McLaren"}}>Riize</Text>
              <View style={{alignSelf: 'baseline'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Emotions')}>
                  <Text style={[{fontFamily: "McLaren"},styles.button]}>Log-In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
      )
    }
    else {
      console.log("wtf");
      return null;
    }
    }
    // else{
    //   this.render();
    // }
  }



class EmotionPickerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#03DAC6', justifyContent: "center" }}>

        <Text style={[styles.text,{fontFamily: "McLaren"}]} >How Are You Feeling?</Text>
        <View style={styles.emoticons}>
          <View>
            <FontAwesomeIcon icon={faSmileBeam} color="yellow" size={50} onPress={() => this.props.navigation.navigate('Happy1')} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Happy</Text>
          </View>

          <View>
            <FontAwesomeIcon icon={faFrown} color="yellow" size={50} onPress={() => this.props.navigation.navigate('Sad1')} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Sad</Text>
          </View>

          <View>
            <FontAwesomeIcon icon={faAngry} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Mad</Text>
          </View>

          <View >
            <FontAwesomeIcon icon={faGrimace} color="yellow" size={50} />
            <Text style={{ textAlign: 'center', marginTop: 5, color: 'white', fontWeight: "bold" }}>Scared</Text>
          </View>

        </View>

      </View>
    );
  }
}

class HappyScreen1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Happy/Images/Happy1.jpg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
      </View>
    )
  }
}

class SadScreen1 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Images/sad1.jpg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad2')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SadScreen2 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Images/sad2.jpg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad3')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SadScreen3 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Images/sad3.png')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad4')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SadScreen4 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Quotes/quote1.jpg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad5')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SadScreen5 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Quotes/quote2.jpeg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad6')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class SadScreen6 extends React.Component {
  render() {
    return (

      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', backgroundColor: '#87ceeb' }}>
        <Image
          source={require('./Sad/Quotes/quote3.jpg')}
          style={{ width: 400, height: 600, resizeMode: 'contain' }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sad7')} >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
class SadScreen7 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <WebView source={{ uri: "https://twitter.com" }} />
      </View>
    );
  }

}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Emotions: EmotionPickerScreen,
    Happy1: HappyScreen1,
    Sad1: SadScreen1,
    Sad2: SadScreen2,
    Sad3: SadScreen3,
    Sad4: SadScreen4,
    Sad5: SadScreen5,
    Sad6: SadScreen6,
    Sad7: SadScreen7,
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
    //fontFamily: "McLaren",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',

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
    marginTop: 325,
    width: 100,
    textAlign: 'center',
  },

  nextButton: {
    backgroundColor: '#f0c311',
    color: 'white',
    fontSize: 16,
    marginBottom: 50,
    marginLeft: 250,
    padding: 15,
    fontWeight: 'bold',
    overflow: 'visible',
    textAlign: 'center',
  }
});
