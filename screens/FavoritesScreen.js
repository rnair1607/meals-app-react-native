import React from "react";
import { StyleSheet, Text, View } from "react-native";

function FavoritesScreen() {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Text>Favorites screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
