import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SongScreen from "./components/songScreen"
import RatingScreen from "./components/ratingScreen"
import Login from "./components/loginScreen"
import HomeScreen from "./components/homeScreen"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Listener" }}
          initialParams={{ loggin: false, username: "", password: ""}}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen 
          name="Add a Song" 
          component={SongScreen} 
          initialParams={{ 
            adding: false , 
            loggin: false, username: "", password: "",
            currentsong: "Enter Song", currentartist: "Enter Artist", 
            currentyear: null , currentgenre: "Enter Genre"}}
          />
        <Stack.Screen 
          name="Add a Rating" 
          component={RatingScreen}
          initialParams={{ 
            username: "", 
            password: "",
            song: ""
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

