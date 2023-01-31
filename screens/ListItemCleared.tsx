import * as React from "react";
import { StyleSheet, View } from "react-native";
import ListItemClearedComp from "../components/ListItemClearedComp";

const ListItemCleared = () => {
  return (
    <View style={styles.listItemCleared}>
      <ListItemClearedComp />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemCleared: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ListItemCleared;
