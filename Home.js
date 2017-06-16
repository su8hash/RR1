import React, {Component} from 'react';
import { Text,View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Home extends Component{
  render() {
       const {navigate} = this.props.navigation ;


  return(<View>
  <Text>HomeScreen</Text>
  <Button title = "Go to Home" onPress = {()=>navigate('Home')} />
  </View>);
  }
}