import React from 'react'
import { View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;
export const MyImage = ({ data }) => {
  return (
    <View style={{
      width, justifyContent: "center", alignItems: "center", shadowColor: "#000", shadowOpacity: 1, shadowOffset: {
        width: 0, height: 0,
      },
      shadowRadius: 20
    }}>
      <Image source={{ uri: data }}
        style={
          {
            width: imageW,
            height: imageH,
            resizeMode: "cover",
            borderRadius: 12

          }
        } />
    </View>
  )
}
