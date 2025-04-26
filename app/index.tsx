import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";


import Navigator from "../src/navigation/index";

export default function App() {
  return (
    <>
      <Navigator />
      
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

