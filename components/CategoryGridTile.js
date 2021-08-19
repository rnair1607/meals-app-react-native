import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

function CategoryGridTile({ title, onSelect, color }) {
  let Touchablecmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }
  const { gridItemStyle, container } = styles;
  return (
    <View style={gridItemStyle}>
      <Touchablecmp style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ ...container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </Touchablecmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItemStyle: {
    flex: 1,
    margin: 15,
    // justifyContent: "center",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    // alignItems: "center",
    // backgroundColor: color,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    elevation: 3,
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});
export default CategoryGridTile;
