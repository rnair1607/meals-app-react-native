import React from "react";
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation: { navigate, push, goBack, replace } }) {
  const { screen, gridItemStyle } = styles;

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={gridItemStyle}
        onPress={() => {
          navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    // <View style={screen}>
    //   <Text>Categories screen</Text>
    //   <Button
    //     title="Go to meals"
    //     onPress={() => {
    //       navigate("CategoryMeals");
    //     }}
    //   />
    //   <Button
    //     title="Go to meals"
    //     onPress={() => {
    //       replace("CategoryMeals");
    //     }}
    //   />
    // </View>
  );
}

CategoriesScreen.navigationOptions = {
  title: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItemStyle: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
    height: 150,
    alignItems: "center",
  },
});
export default CategoriesScreen;
