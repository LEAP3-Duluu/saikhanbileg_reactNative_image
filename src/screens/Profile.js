import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
export const Profile = () => {
  const [token, setToken] = useState("null");
  useEffect(() => {
    getItem();
  }, [token])
  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('first');
      setToken(value);
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text>token is: {token}</Text>
      {/* <Button
        onPress={setItem}
        title="save"
        color="#841584"
      /> */}
    </View>
    // </SafeAreaView>
  )
}

const SIZE = 100.0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
  },
});