// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import UserData from "./src/screens/UserData";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import Bottomnavigation from "./src/components/Bottomnavigation"
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';
import {
 Nunito_600SemiBold,
 Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import AppLoading from "expo-app-loading";


function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold, 
    Nunito_700Bold
  });

if(!fontsLoaded){
  <AppLoading/>
}

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{headerShown : false}}>
          {(props) => <Home {...props} channelName={"Education App"} />}
        </Stack.Screen>

        {/* Course Screen */}
        <Stack.Screen name="Course" component={Course} options={{headerTitleStyle: { fontSize: 25, fontFamily: 'Nunito_600SemiBold'}, headerTitle: 'Courses', headerTitleAlign: 'center',}} />
        {/* UserData Screen */}
        <Stack.Screen name="Student" component={UserData} options={{headerTitleStyle: { fontSize: 25, fontFamily: 'Nunito_600SemiBold'}, headerTitle: 'Students Data', headerTitleAlign: 'center'}} />
        {/* Course Screen */}
        <Stack.Screen name="About" component={About} options={{headerTitleStyle: { fontSize: 25, fontFamily: 'Nunito_600SemiBold'}, headerTitle: 'About Us', headerTitleAlign: 'center'}} />
        {/* Contact Screen */}
        <Stack.Screen name="Contact" component={Contact} options={{headerTitleStyle: { fontSize: 25, fontFamily: 'Nunito_600SemiBold'}, headerTitle: 'Contact Us', headerTitleAlign: 'center'}} />
      </Stack.Navigator>
      <View>
      </View>
    </NavigationContainer>
  );
}
 
export default App;
