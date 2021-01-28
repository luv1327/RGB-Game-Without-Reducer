import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function ColorCounter({ color, handleMore, handleLess }) {
  return (
    <View>
      <Text> {color} </Text>
      <Button title={`More ${color}`} onPress={handleMore} />
      <Button title={`Less ${color}`} onPress={handleLess} />
    </View>
  );
}

const styles = StyleSheet.create({});
