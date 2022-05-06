
import React, {useState} from 'react';
import {
  StyleSheet,View,Text,Image
} from 'react-native';
import LoginScreen from './component/AuthService/LoginScreen'
import RegisterScreen from './component/AuthService/RegisterScreen';
import styles from './component/AuthService/styles';
import shapeStyle from './component/AuthService/shapeStyles';


const App = () => {
  const [screen,setScreen] = useState("login");

  const changeScreen = () => {
    if(screen =='login'){
      setScreen('register')
    }else if('register'){
      setScreen('login')
    }
  }

  const flipCard = () => {

  }

  return(
    <View style={styles.mainScreen}>
      <View style={shapeStyle.card}>
      {
        (screen == "login") ? <LoginScreen changeScreen = {changeScreen}/> 
          : <RegisterScreen changeScreen={changeScreen}/>
      }
      </View>
    </View>
  )

}

export default App;
