import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import MealItem from "../components/MealItem";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function CategoryMealsScreen({ navigation: { navigate, goBack, getParam } }) {
  const catId = getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const { screen } = styles;

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {
          navigate({
            routeName: "MealDetails",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
      />
    );
  };

  const selectedCategory = CATEGORIES.find((category) => category.id === catId);
  return (
    <View style={screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
}

CategoryMealsScreen.navigationOptions = ({ navigation: { getParam } }) => {
  const catId = getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    title: selectedCategory.title,
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
