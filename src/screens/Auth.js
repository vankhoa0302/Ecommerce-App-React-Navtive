import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Auth = () => {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  )
}
const Login = () => {
    return (
      <View style={{flex:1}}>
        <Text>login</Text>
      </View>
    )
  }


const Register = () => {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}}>Register</Text>
        <TextInput 
          style={{width:'80%', height:40,borderWidth:1,borderRadius:5, marginVertical:10,padding:10,marginTop:30}}
          placeholder='Username'
        />
        <TextInput 
          style={{width:'80%', height:40,borderWidth:1,borderRadius:5, marginVertical:10,padding:10}}
          placeholder='Password'
        />
        <TouchableOpacity style={{width:'80%', height:60,borderWidth:1,borderRadius:50, marginVertical:10,padding:10,justifyContent:'center', alignItems:'center'}}>
          <Text>
            Rigister
          </Text>
        </TouchableOpacity>
      </View>
    )
  }


export default Auth

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }

})