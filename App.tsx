import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

import ContentScreen from "./Screens/ContentScreen";
import Word from "./Screens/Word";
import Education from "./Screens/Education";
import Books from "./Screens/Books";
import Friends from "./Screens/Friends";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Index" component={LoginScreen} />
        <Stack.Screen name="Content" component={ContentScreen} />
        <Stack.Screen name="Word" component={Word} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Friends" component={Friends} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
