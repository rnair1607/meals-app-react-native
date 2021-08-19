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
import CategoryGridTile from "../components/CategoryGridTile";

import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation: { navigate, push, goBack, replace } }) {
  const { screen, gridItemStyle } = styles;

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
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

// CategoriesScreen.navigationOptions = {
//   title: "",
// };
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoriesScreen;
