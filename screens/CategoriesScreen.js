import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CategoriesScreen({ navigation: { navigate, push, goBack, replace } }) {
  const { screen } = styles;
  return (
    <View style={screen}>
      <Text>Categories screen</Text>
      <Button
        title="Go to meals"
        onPress={() => {
          navigate("CategoryMeals");
        }}
      />
      <Button
        title="Go to meals"
        onPress={() => {
          replace("CategoryMeals");
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
export default CategoriesScreen;
