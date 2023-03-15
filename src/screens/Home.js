 // import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import React from 'react'
import Menu from "../components/Menu";

const Home = (props) => {
  const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam , ssfs sfsf sfs fff fsfs sfs fsfs';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader, { fontSize: 33, color:  '#4c5dab', marginTop: 0,}]}>{props.channelName}</Text>
      <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
      <View style={styles.lineStyle}></View>
        <Menu />
      <View style={[styles.lineStyle, {marginVertical: 15,}]}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
   height: '100%',
   display: "flex",
   justifyContent: 'space-between',
   paddingHorizontal: 20,
   backgroundColor: '#fff',
   textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
   height: undefined,
   width: '100%',
   aspectRatio: 1.5 ,
   display: 'flex',
   alignItems: "stretch",
   marginTop: 50,
   resizeMode: "contain",
   borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    marginTop: 40,
  },
  paraStyle: {
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'left',
    fontSize: 16,
    color: '#7d7d7d',
    marginTop: -30,
    paddingTop: 50,
    lineHeight: 26,

  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});

export default Home;