import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BottomPanel3Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomPanel3 = ({ style }: BottomPanel3Type) => {
  return <View style={[styles.bottomPanelView, style]} />;
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt9: {
    marginTop: 9,
  },
  mt14: {
    marginTop: 14,
  },
  bottomPanelView: {
    alignSelf: "stretch",
    position: "relative",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#214176",
    height: 106,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 35,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BottomPanel3;
