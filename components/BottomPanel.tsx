import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type BottomPanelType = {
  style?: StyleProp<ViewStyle>;
};

const BottomPanel = ({ style }: BottomPanelType) => {
  const navigation = useNavigation();

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
    position: "relative",
    width: 376,
    height: 106,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomPanel;
