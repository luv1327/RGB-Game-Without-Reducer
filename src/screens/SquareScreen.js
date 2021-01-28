import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 20;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'Red','Green','Blue'
    // change === +15,-15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
      // Dont Do Anything
    }
  };

  return (
    <View>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
      <Text> {`RGB(${red}, ${green}, ${blue})`} </Text>
      <ColorCounter
        color='Red'
        handleMore={() => setColor("red", COLOR_INCREMENT)}
        handleLess={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        handleMore={() => setColor("green", COLOR_INCREMENT)}
        handleLess={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        handleMore={() => setColor("blue", COLOR_INCREMENT)}
        handleLess={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View style={{ height: 200, width: 200 }}></View>
    </View>
  );
}

// {red}
// <FlatList
//   data={color}
//   renderItem={({ item }) => (
//     <ColorCounter
//       color={item}
//       handleMore={() => setRed((prevState) => prevState + 50)}
//       handleLess={() => setRed((prevState) => prevState - 50)}
//     />
//   )}
//   keyExtractor={(item) => item}
// />

const styles = StyleSheet.create({});
