import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Images from "../components/Images";

function ImageScreen() {
  const data = [
    {
      name: "Elon Musk",
      image:
        "https://img.etimg.com/thumb/msid-79255769,width-210,imgsize-601818,,resizemode-4,quality-100/elon-musk.jpg",
      rating: "10",
    },
    {
      name: "Bill Gates",
      image:
        "https://media.gettyimages.com/photos/bill-gates-cochair-bill-melinda-gates-foundation-speaks-onstage-at-picture-id1185999102?s=2048x2048",
      rating: "10",
    },
    {
      name: "Nikola Tesla",
      image:
        "https://media.gettyimages.com/photos/portrait-of-serbianamerican-inventor-and-engineer-nikola-tesla-aged-picture-id102551787?s=2048x2048",
      rating: "10",
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Images name={item.name} image={item.image} rating={item.rating} />
      )}
      keyExtractor={(item) => item.name}
    />
  );
}

export default ImageScreen;
