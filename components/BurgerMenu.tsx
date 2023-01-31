import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ZoomTo from "./ZoomTo";
import Project from "./Project";

type BurgerMenuType = {
  onClose?: () => void;
};

const BurgerMenu = ({ onClose }: BurgerMenuType) => {
  return <View style={styles.burgerMenuView}> 
  <ZoomTo />
  <Project />
  </View>;
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  mt8: {
    marginTop: 8,
  },
  burgerMenuView: {
    position: "relative",
    backgroundColor: "#fff",
    height: 667,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 163,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default BurgerMenu;
