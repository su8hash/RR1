import React, { Component } from 'react';
import Contact from './Contact';
import Home from './Home';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';



 class RR extends Component {
   render() {
  const {navigate} = this.props.navigation ;
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome 
        </Text>
        <Text style={styles.instructions}>
          To get started, edit me
        </Text>
        <Text style ={styles.instructions}>
          Hu ha he
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload
        </Text>
        
        <Button title = "Go to Home" onPress = {()=>navigate('rr')}  style={styles.btn}/>
        <View  style={styles.btn}><Button title = "Go to Contact" onPress = {()=>navigate('Contact')} /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  btn:{
    margin:15,
  },
});


const App = StackNavigator({
  Home : {screen: RR},
  Contact : {screen: Contact},
  rr : {screen: Home}
});

AppRegistry.registerComponent('RR', () =>App);
