import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './Components/Login';
import Splash from './Components/Splash';

 class App extends Component{
  
  render() {
    return (
    
        <Splash />
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