import React from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

function CategoryMealsScreen({ navigation: { navigate, goBack, getParam } }) {
  const catId = getParam("categoryId");
  const { screen } = styles;

  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return (
    <View style={screen}>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          navigate("MealDetails");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          goBack();
        }}
      />
    </View>
  );
}

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  const catId = getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    title: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
