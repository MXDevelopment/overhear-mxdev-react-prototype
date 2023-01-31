import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";

const Tag = () => {
  return (
    <View style={styles.tagView}>
      <View style={styles.tagXText}>
        <Image
          style={styles.exitCrossIcon}
          resizeMode="cover"
          source={require("../assets/exit-cross9.png")}
        />
        <Text style={[styles.poetryText, styles.ml4]}>Poetry</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml4: {
    marginLeft: 4,
  },
  exitCrossIcon: {
    position: "relative",
    width: 9.42,
    height: 9.33,
    flexShrink: 0,
  },
  poetryText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  tagXText: {
    position: "absolute",
    top: 3,
    left: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagView: {
    position: "relative",
    width: 75,
    height: 23,
    flexShrink: 0,
  },
});

export default Tag;
