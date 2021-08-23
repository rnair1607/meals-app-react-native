import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ navigation: { pop, popToTop, getParam } }) {
  const mealId = getParam("mealId");
  const { screen } = styles;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={screen}>
      <Text>{selectedMeal.title}</Text>
      {/* <Button
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
      /> */}
    </View>
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    title: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
