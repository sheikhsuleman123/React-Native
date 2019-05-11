import React, { Component } from 'react'
import {Alert,View, Text,TextInput,StyleSheet,ScrollView,Image, Button} from 'react-native'

import ImagePicker from 'react-native-image-picker';

 class New extends Component {

    state = {
        avatar:null
    }

    addImage = () => {

        ImagePicker.showImagePicker(null,response => {
                this.setState({
                    avatar:response.uri
                })
        })
    }
    addMap = () => {
        Alert.alert("add map")
    }
  render() {
    return (
      <View style={styles.main}>
         <ScrollView>

          <View style={styles.container}>
         <Text style={styles.heading}> Add a Place</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter place name"
            placeholderTextColor="black"
            >
            </TextInput>
            
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
       borderWidth:1,
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
    }

})

export default New;