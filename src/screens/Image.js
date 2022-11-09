import React, { useRef } from "react"

import { Animated, View, Dimensions, StyleSheet } from 'react-native';
import { MyImage } from "../components/MyImage";
const { width, height } = Dimensions.get('screen');
const data = [
  'https://images.unsplash.com/photo-1667715924997-40de1249bc3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1667683371295-05570cd3ca8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1667594049406-25f6a193c50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];
export const ImageCon = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const renderImage = ({ item }) => (
    <MyImage data={item} />
  );
  return (
    <View style={{ flex: 1 }}>
      <View style={StyleSheet.absoluteFillObject}>
        {data.map((image, ind) => {
          const inputRange = [
            (ind - 1) * width,
            ind * width,
            (ind + 1) * width
          ]
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })
          return <Animated.Image
            key={ind}
            source={{ uri: image }}
            style={[StyleSheet.absoluteFillObject,
            {
              opacity
            }
            ]}
            blurRadius={50}
          />
        })}
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        renderItem={renderImage}
      />
    </View>
  )
}
