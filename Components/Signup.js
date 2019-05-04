import React , { Component} from 'react';
import {ImageBackground, Text, View , ScrollView,Image, Alert,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {TextField} from 'react-native-material-textfield';

import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageOne from './images/newpurple.jpg';

import showImage from './images/show.png';
import hideImage from './images/hide.png';


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
  
//   validate = (email) => {

//       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
//       if(reg.test(email) === false)
//       {
//       Alert.alert("Email is Not Correct");
//       this.setState({email:email})
//       return false;
//         }
//       else {
//         this.setState({email:email})
//         console.log("Email is Correct");
//       }
//     }
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
   
        {/* <View style={styles.logoContainer}>
         <Image style={styles.logo} source = {require('../assets/images/logo.png')}/>
       </View> */}

      <View style={styles.childContainer}>
      <Text style={styles.heading}>Sign Up</Text>
   <View style={{width:'90%'}}> 
      <TextField
                style={styles.loginField}
                label="Firstname"
                fontSize={20}
                tintColor='orange'
                textColor = "#fff"
                baseColor="#fff"    
                lineWidth={1}
                labelPadding={1} 
                value={this.state.firstName}
                onChangeText={(fname) => this.setState({ firstName: fname }) }       
              /> 
                <TextField
                style={styles.loginField}
                label="Lastname"
                fontSize={20}
                tintColor='orange'
                 textColor = "#fff"
                baseColor="#fff"    
                 lineWidth={1}
                 labelPadding={1} 
                 value={this.state.lastName}
                onChangeText={(lname) => this.setState({ lastName: lname }) }       
                   
              />
              <TextField
              style={styles.loginField}
              label="Email"
              fontSize={20}
              textColor = "#fff"
              baseColor= "#fff"
              tintColor='orange'
              keyboardType = "email-address"
            //   titleTextStyle='red'
              lineWidth={1}
              labelPadding={1}       
              value={this.state.Email} 
            //   onBlur={(email) => this.validate(email)}    
              onChangeText={(email) => this.setState({ Email: email }) }       
            
            />

     <View style={{flexDirection:'row',borderBottom:2,borderBottomColor:'red'}}>      
      <View style={{width:'100%'}}>
      <TextField
                style={styles.loginField}
                label="Enter Password"
                // characterRestriction={8}
                // maxLength={8}
                fontSize={20}
                tintColor='orange'
                textColor = "#fff"     
                baseColor="#fff" 
                lineWidth={1}
                labelPadding={1}                  
                secureTextEntry={this.state.showPass}
                value={this.state.Password}
                onChangeText={(password) => this.setState({ Password: password }) }       
              />
            </View>
            <View > 
             {
                  this.state.Password !== '' ?
                  this.state.showEye ?
                  <TouchableWithoutFeedback onPress={this.showPassword}>
                   <Icon name="eye" size={25} style={{alignSelf:'flex-end',color:'#fff',
                    marginTop:34,marginLeft:-30,
                    width:30}} />
                  </TouchableWithoutFeedback>
                  :
                  <TouchableWithoutFeedback onPress={this.showPassword} >
                    <Icon name="eye-slash" size={25} style={{alignSelf:'flex-end',color:'#fff',
                    marginTop:34,marginLeft:-30,
                    width:30}} />
                  </TouchableWithoutFeedback>
                 :
                <Text> </Text>  
              } 
              </View>
        </View>

            <TextField
                style={styles.loginField }
                label="Confirm Password"
                maxLength={8}
                fontSize={20}
                tintColor='orange'
                textColor = "#fff"     
                baseColor="#fff" 
                lineWidth={1}
                labelPadding={1}                  
                secureTextEntry={true}
                // onBlur={this.ConfPassword}
                value={this.state.ConfirmPassword}
                onChangeText={(Cpassword) => this.setState({ ConfirmPassword: Cpassword }) }       
            
              /> 

      <TouchableOpacity style={styles.loginButton} onPress={this.onClickHandler}>
                <Text  style={styles.loginTitle}> SignUp</Text>
        </TouchableOpacity>
        </View>
      </View>
              </ImageBackground>
            </ScrollView>
      </View>
        );
    }
}
export default Signup;