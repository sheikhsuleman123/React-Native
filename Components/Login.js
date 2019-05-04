import React, { Component } from 'react'
import {StyleSheet,TextInput,TouchableOpacity,ScrollView, Text, View,ImageBackground} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ImageOne from './images/newpurple.jpg';

import Icon from 'react-native-vector-icons/FontAwesome';

 class Login extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <ImageBackground source={ImageOne} style={styles.imageContainer}>
          
          <View style={styles.up}>
           {/* <Ionicons  name="ios-speedometer" size={100} color={'orange'} > </Ionicons> */}
           <Text style={styles.title}> Login </Text>
           </View>
          
           <View style={styles.down}>
           <View style={{flexDirection:'row'}}>
           <Icon style={{marginTop:22,marginRight:10}} name="user" size={22} color={'#fff'} > </Icon>
          
           <TextInput
                style={styles.textInput}
                placeholder="Enter your Email "
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                >
                </TextInput>   
                </View>
              
              <View style={{flexDirection:'row'}}>
              <Icon style={{marginTop:22,marginRight:10}} name="lock" size={22} color="#fff"></Icon> 
               <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#fff"
                textContentType="password"
                secureTextEntry={true}
                ></TextInput>
                </View>
                
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginTitle}> Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.googlebtn}>
              <Text style={styles.googleTitle}> Sign up </Text>
              </TouchableOpacity>
  <Text style={styles.goSignup}> I will do it later.</Text>
         </View>
        </ImageBackground> 
        </ScrollView> 
        </View>

      
        );
  }
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      height:'100%',
      width:'100%',
    },
    imageContainer: {
      height:700,
      width:'100%',
    },
    up: {
        marginTop: "10%",
        alignItems: 'center',
    },
    down:{
      marginTop: "35%",
      alignItems: 'center',
    },

    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
    },
      textInput: {
        width:'82%',
        color:"#fff",
        height: 42,
        fontSize:20,
        padding: 5,
        paddingLeft:15,
        marginTop:'3%',
        borderWidth:2,
        borderColor:"#fff",
        borderRadius: 35,
        backgroundColor: null,
    },
    loginButton: {
      width: "80%",
      height: '18%',
      borderRadius: 25,
      paddingBottom:15,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:'5%',
      backgroundColor: 'purple'
    },
    loginTitle: {
        fontSize: 20,
        textAlign:'center',
        color: 'white',
    
    },
    googlebtn : {
      width: "80%",
      height: '18%',
      padding:10,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    googleTitle:{
      fontSize:20,
      textAlign:'center',
      color:'red'
    },
    goSignup:{
      color:'#fff',
      fontSize:17,
      marginTop:'2%',
      textAlign:'center'
    }
    
  });
  

export default Login;