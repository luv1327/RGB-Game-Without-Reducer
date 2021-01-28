import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default function ListScreen() {
  const entrepreneurs = [
    { name: "Elon Musk", age: 50 },
    { name: "Steve Jobs", age: 50 },
    { name: "Bill Gates", age: 50 },
    { name: "Mark Zuckerberg", age: 50 },
    { name: "Larry Page", age: 50 },
    { name: "Sergey Brin", age: 50 },
  ];
  return (
    <View>
      <FlatList
        data={entrepreneurs}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {" "}
            {item.name} - {item.age}
          </Text>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 100,
    color: "tomato",
  },
});
