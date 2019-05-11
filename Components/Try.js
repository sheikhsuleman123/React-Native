import React , { Component} from 'react';
import {ImageBackground,TextInput, Text, View , ScrollView,Image, Alert,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {TextField} from 'react-native-material-textfield';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageOne from './images/newpurple.jpg';


class Signup extends Component {
  constructor() {
    super();
   
    this.onClickHandler = this.onClickHandler.bind(this);
    
    this.state = {

       firstName : '',
       lastName : '',
       Email    :  '',
       Password  : '',
       ConfirmPassword: '',
       showEye: false,
       showPass: true,
     }
  }

  onClickHandler() {
    const {firstName,lastName,Email,Phone,Password,ConfirmPassword} = this.state;
    Alert.alert(firstName + '' + '' + lastName + '' + Email + '' + Phone + '' + Password + '' + ConfirmPassword  );
  }
  

    ConfPassword() {
      if (this.state.Password == this.state.ConfirmPassword) {

      } else {
        Alert.alert("password does not correct")
      }
    }

    showPassword = () => {
      // Alert.alert('in function')
      this.setState( prevState => (
        {
        
          showEye :  !prevState.showEye,
          showPass : !prevState.showPass
        }
      ));
    }

    render() {
        return (
      
     <View style={styles.container}>
      <ScrollView >
      <ImageBackground source={ImageOne} style={styles.imageContainer}>
      
      <Text style={styles.heading}>Sign Up</Text>
  
<View style={{marginVertical:20}}>
       <View style={{alignSelf:'center',flexDirection:'row'}}>
           <Icon style={{marginTop:32,marginRight:10}} name="user" size={22} color={'#fff'} > </Icon>
           <TextInput
                style={styles.textInput}
                marginTop={20}
                placeholder="Enter your Firstname "
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                >
                </TextInput>   
             </View>
        
       <View style={{alignSelf:'center',flexDirection:'row'}}>
           <Icon style={{marginTop:32,marginRight:10}} name="user" size={22} color={'#fff'} > </Icon>
           <TextInput
                style={styles.textInput}
                marginTop={25}
                placeholder="Enter your Lastname "
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                >
                </TextInput>   
             </View>
        
       <View style={{alignSelf:'center',flexDirection:'row'}}>
           <Icon style={{marginTop:32,marginRight:10}} name="envelope" size={22} color={'#fff'} > </Icon>
           <TextInput
                style={styles.textInput}
                marginTop={25}
                placeholder="Enter your Email "
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                >
                </TextInput>   
             </View>
        
      <View style={{alignSelf:'center',flexDirection:'row'}}>
           <Icon style={{marginTop:32,marginRight:10}} name="envelope" size={22} color={'#fff'} > </Icon>
          
           <TextInput
                style={styles.textInput}
                placeholder="Enter your Password "
                marginTop={25}
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                secureTextEntry={this.state.showPass}
                value={this.state.Password}
                onChangeText={(password) => this.setState({ Password: password }) }       
              />
            </View>
            
      <View style={{alignSelf:'center',flexDirection:'row'}}>
           <Icon style={{marginTop:32,marginRight:10}} name="key" size={22} color={'#fff'} > </Icon>
          
           <TextInput
                style={styles.textInput}
                placeholder="Confirm Password "
                marginTop={25}
                placeholderTextColor="#fff"
                textContentType="emailAddress"
                keyboardType="email-address"
                secureTextEntry={this.state.showPass}
                value={this.state.Password}
                onChangeText={(password) => this.setState({ Password: password }) }       
              />
            </View>
   </View>       

      <TouchableOpacity style={styles.loginButton} onPress={this.onClickHandler}>
                <Text  style={styles.loginTitle}> SignUp</Text>
        </TouchableOpacity>
      
              </ImageBackground>
            </ScrollView>
      </View>
        );
    }
}
export default Signup;