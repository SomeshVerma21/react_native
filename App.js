
import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native'
import Home from './src/screens/HomeScreen/Home';
import DetailsScreen from './src/screens/HomeScreen/DetailsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{
          headerLeft:() => (
            <Image></Image>
          ),
          headerRight: () => (
            <View></View>
          ),
        }}  component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
