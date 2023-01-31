import * as React from "react";
import { StyleSheet, View } from "react-native";
import ListItemDelete1 from "../components/ListItemDelete1";

const ListItemDelete = () => {
  return (
    <View style={styles.listItemDelete}>
      <ListItemDelete1 />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemDelete: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ListItemDelete;
