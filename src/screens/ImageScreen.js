import { useState } from 'react';
import { View, Text, SafeAreaView, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export const ImageScreen = () => {
  const [img, setImg] = useState("");
  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const pick = async () => {
    const lib = await launchImageLibrary();
    console.log(lib.assets[0].uri);
    setImg(lib.assets[0].uri);
  }
  return (
    <SafeAreaView>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text>hello</Text>
        {img ? (
          <Image
            source={{ uri: img }}
            style={
              {
                width: 200,
                height: 200,
                resizeMode: "cover",
                borderRadius: 12
              }
            }
          />
        ) :
          (<Text>no image</Text>)}
        <Button
          onPress={pick}
          title={"choose image"}
        />
      </View>
    </SafeAreaView>
  )
}