import { View, Text, AsyncStorage, Button, SafeAreaView } from 'react-native';

export const LoginScreen = () => {
  const setItem = async () => {
    try {
      await AsyncStorage.setItem(
        'first',
        'token saved'
      );
    } catch (error) {
      console.log("error" + error);
    }
  }
  return (
    <SafeAreaView>
      <View>
        <Text>login screen</Text>
        <Button
          onPress={setItem}
          title="save"
          color="#841584"
        />
      </View>
    </SafeAreaView>
  )
}