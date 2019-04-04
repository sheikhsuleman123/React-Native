import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './Components/Login';
import Splash from './Components/Splash';
import AppStackNavigator from './Components/AppStackNavigator';
 class App extends Component{
  
  render() {
    return (
    
        <AppStackNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
 
});

export default App;