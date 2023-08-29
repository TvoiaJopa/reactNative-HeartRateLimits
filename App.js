import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function App() {
  const [number, onChangeNumber] = React.useState("");
  const [max, onMax] = React.useState("");
  const [min, onMin] = React.useState("");

  const SetAge = (age) => {
    onChangeNumber(age);
    onMin((220 - age) * 0.65);
    onMax((220 - age) * 0.85);
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput onChangeText={SetAge} style={styles.input} />
      <StatusBar style="auto" />
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
  },
});
