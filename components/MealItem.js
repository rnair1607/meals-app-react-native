import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

function MealItem(props) {
  let Touchablecmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <Touchablecmp onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{props.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
          </View>
        </View>
      </Touchablecmp>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#ccc",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});
export default MealItem;
