import React from 'react'
import {View,TextInput,TouchableOpacity,Text} from 'react-native'
import styles from './styles'

const RegisterScreen = ({changeScreen}) => {

    function showDialog(str) {
        alert(str)
    }

    return(
        <View style = {styles.container}>
            <TextInput
            style = {styles.inputField}
            underlineColorAndroid = "transparent"
            placeholder="Full Name"
            autoCapitalize="none"
            placeholderTextColor="#9a73ef"
            onChangeText={(text)=>{

            }}
           />
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
            onPress = {() => showDialog("Login in progress")}
           >
              <Text style = {styles.submitBtnText}>Sign Up</Text>
           </TouchableOpacity>
           <View style = {styles.screenChangeContainer}>
              <Text style = {styles.textTV}>Already have an account</Text>
              <Text style={styles.clickAbleText} 
              onPress={()=>{
                changeScreen()
              }}>Log In </Text>
           </View>
        </View>
    )
}

export default RegisterScreen;