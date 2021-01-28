import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <View>
      <Button
        title='Add A Color'
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{ height: 100, width: 100, backgroundColor: item }}
          ></View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ColorsScreen;
