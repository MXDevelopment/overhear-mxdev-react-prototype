import * as React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const StatusBar = () => {
  return <View style={styles.statusBar} />;
};

const styles = StyleSheet.create({
  statusBar: {
    height: statusBarHeight,
    alignSelf: "stretch",
    backgroundColor: "#214176",
  },
});

export default StatusBar;

