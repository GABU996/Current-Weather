import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, ScrollView, Stylesheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerStyle: { backgroundColor: "#3f6184" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
