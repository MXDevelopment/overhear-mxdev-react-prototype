import * as React from "react";
import { StyleSheet, View } from "react-native";
import TopPanelTags from "../components/TopPanelTags";

const TopPannelTags = () => {
  return (
    <View style={styles.topPannelTags}>
      <TopPanelTags />
    </View>
  );
};

const styles = StyleSheet.create({
  topPannelTags: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 126,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default TopPannelTags;
