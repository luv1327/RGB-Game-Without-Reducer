import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Images({ name, image, rating }) {
  return (
    <View style={styles.imageContainer}>
      <Text> {name} </Text>
      <Image
        style={styles.personsImage}
        source={{
          uri: `${image}`,
        }}
      />
      <Text> {rating} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  personsImage: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
});
