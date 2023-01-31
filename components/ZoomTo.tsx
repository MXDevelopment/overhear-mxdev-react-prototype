import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ZoomToType = {
  style?: StyleProp<ViewStyle>;
};

const ZoomTo = ({ style }: ZoomToType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.zoomToPressable, style]}
      onPress={() => navigation.navigate("false")}
    >
      <Text style={styles.zoomToText}>Zoom To</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  zoomToText: {
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "center",
    width: 162,
    height: 22.34,
  },
  zoomToPressable: {
    position: "relative",
  },
});

export default ZoomTo;
