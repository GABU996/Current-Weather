import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import Navigation from "./src/navigation/Navigation";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
};

export default App;
