import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { MovieCart } from '../components/MovieCart';

const mocData = [
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 1
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 2
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 3
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 4
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 5
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 6
  },
  {
    img: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
    name: "black widow",
    rate: 8.3,
    createdAt: "11 Jan (Out now)",
    id: 7
  }
]
export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mocData);
  }, [])
  const renderItem = ({ item }) => (
    <MovieCart data={item} />
  );
  return (
    <View style={{ ...styles.full, backgroundColor: "#2e2e2e" }}>
      <SafeAreaView style={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
        <Text style={styles.title}>Movies</Text>
        <FlatList
          style={styles.scrollView}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    left: 20,
    top: 20,
    marginTop: 20
  },
  full: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  },
  container: {
    flexDirection: "column",
    backgroundColor: "#2e2e2e"
  },
  scrollView: {
    backgroundColor: '#2e2e2e',
    marginTop: 20,
    width: "90%"
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
  bl: {
    height: 50,
    width: 50,
    backgroundColor: "blue"
  }
});