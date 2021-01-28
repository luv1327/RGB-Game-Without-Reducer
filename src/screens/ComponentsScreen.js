import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default Screen = () => {
  const myName = "Luv";
  return (
    <View>
      <Text style={styles.text}>Getting Started With React Native!</Text>
      <Text style={styles.nameText}>My Name Is {myName} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  nameText: {
    fontSize: 20,
  },
});
