import * as React from "react";
import { StyleSheet, View } from "react-native";
import ListItemExpanded from "../components/ListItemExpanded";

const ListItemExpand = () => {
  return (
    <View style={styles.listItemExpand}>
      <ListItemExpanded />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemExpand: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ListItemExpand;
