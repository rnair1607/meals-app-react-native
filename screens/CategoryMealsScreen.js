import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CategoryMealsScreen({ navigation: { navigate } }) {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Text>Categories meals screen</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          navigate("MealDetails");
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

export default CategoryMealsScreen;
