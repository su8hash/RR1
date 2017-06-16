import React, {Component} from 'react';
import { Text,View ,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Contact extends Component{
  render() {
      const {navigate} = this.props.navigation ;

   return(<View>
  <Text>Contacts</Text>
    <Button title = "Go to Home" onPress = {()=>navigate('Home')} />
  </View>);
  }
}