import React, { Component } from 'react'
import {StyleSheet,TextInput,TouchableOpacity,TouchableWithoutFeedback, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

 class Login extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.up}> 
           <Ionicons 
           name="ios-speedometer" 
           size={100}
           color={'orange'}
           >
           </Ionicons>
           
            <Text style={styles.title}>
            Sharing your images for everyone
            </Text>
        </View>
      
        <View style={styles.down}>
            
            <View style={styles.textInputContainer}>
            
                <TextInput
                style={styles.textInput}
                placeholder="Enter your email address"
                textContentType="emailAddress"
                keyboardType="email-address"
                > 
                </TextInput>
                
                <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                textContentType="password"
                keyboardType="phone-pad"
                secureTextEntry={true}
              > 
                </TextInput>
            </View>     
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginTitle}> Login</Text>
            </TouchableOpacity>

            <FontAwesome.Button
            style={styles.facebookbtn}
            // name="facbook"
            backgroundColor="#3b5998"
            >
              <Text style={styles.loginTitle}>Log in with Facebook </Text>
              </FontAwesome.Button>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#191970'
    },
    up: {
        // flex: 3,
        marginTop: '10%',
        alignItems: 'center',
    },
    down: {
        // flex: 5,
        // justifyContent: 'center',
        marginTop: '10%',
        alignItems: 'center',
    },
    title: {
        color: '#FFD700',
        textAlign: 'center',
        width:400,
        fontSize: 22,
    },
      textInput: {
        width: 300,
        padding: 10,
        marginBottom: 20,
        borderRadius: 6,
        backgroundColor: 'rgba(255,255,255,00.5)',
    },
    loginButton: {
        width: 300,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 15,
        alignItems: 'center',
        backgroundColor: 'rgb(221, 97, 97)'
    },
    loginTitle: {
        fontSize: 15,
        color: 'white',
    },
    facebookbtn : {
      width: 300,
      height: 35,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    
    }

   
  });
  

export default Login;