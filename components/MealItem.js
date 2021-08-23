import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
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
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity}</Text>
            <Text>{props.affordability}</Text>
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
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: "white",
    fontFamily: "open-sans-bold",

    textAlign: "center",
  },
});
export default MealItem;
