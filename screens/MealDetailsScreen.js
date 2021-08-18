import React from "react";
import { StyleSheet, Text, View } from "react-native";

function MealDetailsScreen() {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Text>Meal details screen</Text>
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

export default MealDetailsScreen;
