import { useEffect, useState } from 'react';
import { AsyncStorage, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
export const SplashScreen = ({ navigation }) => {
  const [chek, setChek] = useState("");
  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem('first');
      if (value) {
        setChek(value);
        console.log("duuslaa...");
      }
    } catch (error) {
      console.log("aldaa...");
    }
  }
  useEffect(() => {
    getItem();
    if (!chek) navigation.navigate('Login')
    else navigation.navigate('HomeScreen')
  }, [chek])
  return (
    <LottieView
      source={require("../assets/logo.json")}
      autoPlay
      loop={true}
    // onAnimationFinish = {() => {
    //   na
    // }}
    />
  )
}