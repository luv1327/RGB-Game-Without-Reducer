import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("List")} title='List' />
      <Button
        title='Components'
        onPress={() => navigation.navigate("Components")}
      />
      <Button title='Images' onPress={() => navigation.navigate("Image")} />
      <Button title='Counter' onPress={() => navigation.navigate("Counter")} />
      <Button title='Colors' onPress={() => navigation.navigate("Colors")} />
      <Button title='Squares' onPress={() => navigation.navigate("Square")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
