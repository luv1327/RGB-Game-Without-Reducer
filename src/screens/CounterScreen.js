import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text> Counter Screen </Text>
      <Text> {counter} </Text>
      <Button
        title='Increment'
        onPress={() => setCounter((prevState) => prevState + 1)}
      />
      <Button
        title='Decrement'
        onPress={() => setCounter((prevState) => prevState - 1)}
      />
    </View>
  );
}
