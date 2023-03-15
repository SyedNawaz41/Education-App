import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native';

const UserData = () => {
  const [isLoaded, setisLoaded] = useState(true)
  const [myData, setmyData] = useState([]);

  const getUserData = async () => {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const realData = response.json();
    setmyData(realData);
    console.log(realData);
    }
    catch(error){
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  // Render the student cards
  const showUserData = () => {
 return (
  <View style={styles.mainContainer}>
  <Text>hello</Text>
  </View>
 );
  };
  
  return (
    <View>
      <Text>List Of Students</Text>
      <FlatList data={myData} renderItem={showUserData}/>
    </View>
  )
}

export default UserData

const styles = StyleSheet.create({})