
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, ImageCon, ImageScreen, Map, Profile } from '../screens';

const Tap = createBottomTabNavigator();

export const Nav = () => {
    return (
        <Tap.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'pink'
            }}
            tabBarOptions={{
                activeTintColor: '#fff',
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black'
            }}
        >
            <Tap.Screen name="Home" component={Home} />
            <Tap.Screen name="Profile" component={Profile} />
            <Tap.Screen name="Image" component={ImageCon} />
            <Tap.Screen name="ImgPick" component={ImageScreen} />
            <Tap.Screen name="Map" component={Map} />
        </Tap.Navigator>
    )
}