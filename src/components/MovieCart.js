import React from 'react';
import {
  Image,
  Text,
  View,
  Alert,
  StyleSheet,
} from 'react-native';
import { TapGestureHandler, LongPressGestureHandler } from 'react-native-gesture-handler';
export const MovieCart = ({ data }) => {
  return (
    <LongPressGestureHandler onActivated={() => Alert.alert("long tap")}>
      <TapGestureHandler onActivated={() => Alert.alert('single tap')} >
        <View style={{ ...styles.one, ...styles.flex }}>
          <View style={{ ...styles.row, ...styles.full }}>
            <Image style={styles.image} source={{ uri: data.img }} ></Image>
            <View style={{ ...styles.column, width: 150 }}>
              <View style={styles.allMar}>
                <Text style={styles.name}>{data.name}</Text>
              </View>
              <View style={styles.bottom}>
                <Text style={styles.rat}>{data.rate}</Text>
                <Text style={styles.date}>{data.createdAt}</Text>
              </View>
            </View>
            <View style={{ ...styles.like, ...styles.flex }}>
              <View style={styles.bl}></View>
            </View>
          </View>
        </View>
      </TapGestureHandler>
    </LongPressGestureHandler>
  )
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row"
  },
  full: {
    height: "100%",
    width: "100%"
  },
  one: {
    backgroundColor: "#3c3c3c",
    height: 150,
    width: "100%",
    borderRadius: 8,
    marginTop: 10
  },
  image: {
    height: "100%",
    width: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    color: "white"
  },
  rat: {
    fontSize: 20,
    color: "pink"
  },
  date: {
    fontSize: 12,
    color: "white",
    marginLeft: 20,
    marginTop: 4
  },
  allMar: {
    marginLeft: 20,
    marginTop: 20
  },
  bottom: {
    position: "absolute",
    bottom: 20,
    marginLeft: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  like: {
    height: "100%",
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  bl: {
    height: 50,
    width: 50,
    backgroundColor: "blue"
  }
});