import { useLinkProps } from '@react-navigation/native'
import React from 'react'
import {View,TextInput,TouchableOpacity,Text} from 'react-native'
import styles from './styles'

const LoginScreen = ({changeScreen}) => {

   function showDialog(str) {
      alert(str)
  }
    return(
        <View style = {styles.container}>
           <TextInput
            style = {styles.inputField}
            underlineColorAndroid = "transparent"
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#9a73ef"
            onChangeText={(text)=>{

            }}
           />
           <TextInput
            style = {styles.inputField}
            underlineColorAndroid = "transparent"
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="#9a73ef"
            onChangeText={(text)=>{

            }}
           />
           <TouchableOpacity
            style = {styles.submitBtn}
            onPress = {() => showDialog('Login in progress')}
           >
              <Text style = {styles.submitBtnText}>Login</Text>
           </TouchableOpacity>
           <View style = {styles.screenChangeContainer}>
              <Text style = {styles.textTV}>Don't have account</Text>
              <Text style={styles.clickAbleText} 
              onPress={()=>{
                  changeScreen()
              }}>Sign Up </Text>
           </View>
        </View>
    )
}

export default LoginScreen;