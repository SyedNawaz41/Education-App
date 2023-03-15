import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/Course";

const Course = ({ navigation}) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.descriptionTextStyle}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("CourseDetails")}>
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}
      />
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,  
    elevation: 8,
    marginVertical: 30,  
  },
  mainHeader: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: "500",
    paddingBottom: 15,
    textAlign: "center",

  },
 descriptionTextStyle: {
  textAlign: "left",
  fontFamily: 'JosefinSans_400Regular',
  lineHeight: 20,
  fontSize: 16,
  color: '#7d7d7d'
 },
 buttonContainer: {
  display: 'flex',
  flexDirection: "row",
  justifyContent: "center",
 },
 buttonStyle: {
  backgroundColor: '#809fff',
  borderRadius: 5,
  paddingVertical: 10,
  paddingHorizontal: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 15,
 }, 
 buttonText: {
  fontSize: 20,
  color: '#eee',
  fontFamily: 'JosefinSans_500Medium',
  textTransform: 'capitalize',
 },
 price: {
  backgroundColor: '#344055',
  color: '#eee',
  paddingVertical: 10,
  paddingHorizontal: 15,
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center', 
  borderBottomLeftRadius: 1,
  borderTopLeftRadius: 1,
  fontSize: 20,
  fontFamily: 'JosefinSans_400Regular',
  textAlign: "center",
 },
});
 