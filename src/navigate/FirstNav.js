import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen, SplashScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const FirstNav = () => {
  return (
    <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'pink'
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  )
}