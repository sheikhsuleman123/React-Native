import React, { Component } from 'react'
import {Alert,Picker,View, Text,TextInput,StyleSheet,ScrollView,Image, Button,TouchableOpacity} from 'react-native'
import { TextField } from 'react-native-material-textfield';
import ImagePicker from 'react-native-image-picker';

 class New extends Component {

    state = {
        placeName:'',
        city:'',
        avatar:null,
        mapLocation:''
    }

    addImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatar: source,
              });
            }
          });
    }
    addMap = () => {
        Alert.alert("add map")
    }
  render() {
    return (
      <View style={styles.main}>
         <ScrollView>
        <View style={{alignSelf:'center'}}>
         <Text style={styles.heading}> Add a Place</Text>
         </View>
         <View style={{width:'90%',marginLeft:22}}>
         <TextField
                style={styles.loginField}
                label="Enter Place Name"
                fontSize={20}
                tintColor="blue"
                textColor = "black"
                baseColor="purple"    
                lineWidth={1}
                labelPadding={1} 
                value={this.state.placeName}
                onChangeText={(name) => this.setState({ placeName: name }) }       
              />
              </View> 
          <View style={styles.container}>
            <View style={{height:50,width:'90%',borderWidth:1,marginTop:15,
            borderColor:'gray'}}>
            <TouchableOpacity>
        <Picker
          placeholder="Select the City"
          selectedValue={this.state.city}
          onValueChange={(itemValue) => this.setState({city: itemValue}) }
          itemStyle={{
             backgroundColor: "yellow",
             color: "red",
             }}
             itemTextStyle={{
               fontSize:18,
               color:'green'
             }}
             textStyle={{
               color:'blue'
             }}>
          <Picker.Item  label="Faisalabad" value="Faisalabad" />
          <Picker.Item  label="Lahore" value="Lahore" />
          <Picker.Item label="Islamabad" value="Islamabad" />
          <Picker.Item label="Rawalpindi" value="Rawalpindi" />
          <Picker.Item label="Muree" value="Muree" />
          <Picker.Item label="Sargodha" value="Sargodha" />
          <Picker.Item label="Naran" value="Naran" />
          <Picker.Item label="Kaghan" value="Kaghan" />
      </Picker>
      </TouchableOpacity>
      </View>
            <Image
            source={{uri:this.state.avatar}}
            style={styles.avatar}
            >
            </Image>
            <Button 
             title="Add place Image"
             color="#841584"
            onPress={() => this.addImage()}
             />

        <View
            style={styles.avatar}
            >
            </View>
            <Button 
             title="Add place Location"
             color="#841584"
            onPress={() => this.addMap()}
             />
        <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder="Type Discription about place"
            placeholderTextColor="black"
            numberOfLines={5}
            multiline={true}
            />
            <TouchableOpacity style={styles.loginButton} onPress={this.onClickHandler}>
                <Text  style={styles.loginTitle}> Add Post </Text>
        </TouchableOpacity>
            </View>
            </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    main:{
     flex:1,
     backgroundColor:'#FFFFFF'
    },
    container:{
        justifyContent:'flex-start',
        alignItems:'center',
    },
   input:{
      //  borderWidth:1,
       width:'90%',
       fontSize:20,
       padding:10
   },
   TextInputStyleClass:{
    width:'90%',
    fontSize:18,
    marginVertical:20,
    borderWidth: 1,
    height:100
    },
    heading:{
        fontSize:25,
        justifyContent:'flex-start',
        alignItems:'center',
        fontWeight:'bold',
        marginVertical:'10%'
    },
    avatar:{
        width:'90%',
        backgroundColor:'#dcdcdc',
        marginVertical:20,
        height:200,
        borderWidth:2,
        borderColor:'gray'
    },
    loginButton: {
      width:'80%',
      alignSelf:'center',
      borderWidth: 1,
      marginLeft:20,
      backgroundColor: 'purple',
      borderColor: 'purple',
      marginVertical: 20,
      color: '#fff',
      padding: 10,
    },
    loginTitle: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
    },


})

export default New;