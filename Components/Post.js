import React, { Component } from 'react'
import {View, Text,TextInput,StyleSheet,ScrollView} from 'react-native'

 class New extends Component {

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
    textAlign: 'center',
    marginVertical:20,
    borderWidth: 1,
    height:100
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        marginVertical:'10%'
    }

})

export default New;