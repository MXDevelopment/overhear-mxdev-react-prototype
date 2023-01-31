import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ListItemClearedComp = () => {
  return (
    <View style={styles.itemsView}>
      <View style={styles.deleteView}>
        <Text style={styles.deleteText}>Delete</Text>
        <Image
          style={[styles.trash2Icon, styles.ml8]}
          resizeMode="cover"
          source={require("../assets/trash2.png")}
        />
      </View>
      <View style={styles.itemView}>
        <Image
          style={styles.cherryIcon}
          resizeMode="cover"
          source={require("../assets/cherry.png")}
        />
        <Text style={[styles.listItem1, styles.ml8]}>List Item 1</Text>
        <Text style={[styles.text, styles.ml8]}>4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8: {
    marginLeft: 8,
  },
  deleteText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Work Sans",
    color: "#fff",
    textAlign: "left",
  },
  trash2Icon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  deleteView: {
    position: "absolute",
    marginTop: -18,
    top: "50%",
    right: 0,
    backgroundColor: "#b90000",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    display: "none",
    zIndex: 0,
  },
  cherryIcon: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  listItem1: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    fontFamily: "Work Sans",
    color: "#fff",
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Work Sans",
    color: "#fff",
    textAlign: "right",
  },
  itemView: {
    position: "absolute",
    top: 0,
    right: 91,
    left: -28,
    backgroundColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
    zIndex: 1,
  },
  itemsView: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
});

export default ListItemClearedComp;
