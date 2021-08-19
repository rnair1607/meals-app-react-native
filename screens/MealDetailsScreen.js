import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function MealDetailsScreen({ navigation: { pop, popToTop } }) {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Text>Meal details screen</Text>
      <Button
        title="Go back to categorie meals"
        onPress={() => {
          pop();
          // popToTop();
        }}
      />
      <Button
        title="Go back to categories"
        onPress={() => {
          // pop();
          popToTop();
        }}
      />
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
