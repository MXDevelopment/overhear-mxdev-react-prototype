import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Tag from "../components/Tag";

const TopPanelTags = () => {
  return (
    <View style={styles.topPanelVarientsLocofy}>
      <View style={styles.filterSystemView}>
        <View style={styles.burgerOverhearTagsChevronView}>
          <View style={styles.burgerOverhearView}>
            <Image
              style={styles.burgerStrokeIcon}
              resizeMode="cover"
              source={require("../assets/burger-stroke.png")}
            />
            <Text style={[styles.tOPTEXT, styles.ml49]}>OVERHEAR</Text>
            <View style={[styles.rectangleView, styles.ml49]} />
          </View>
          <Tag />
          <Image
            style={styles.chevronStrokeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-stroke6.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml49: {
    marginLeft: 49,
  },
  burgerStrokeIcon: {
    position: "relative",
    width: 24.5,
    height: 21,
    flexShrink: 0,
  },
  tOPTEXT: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 34,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "rgba(217, 217, 217, 0)",
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  burgerOverhearView: {
    alignSelf: "stretch",
    height: 34,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chevronStrokeIcon: {
    position: "relative",
    width: 51.65,
    height: 10.46,
    flexShrink: 0,
  },
  burgerOverhearTagsChevronView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterSystemView: {
    alignSelf: "stretch",
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    flexDirection: "column",
    paddingLeft: 12,
    paddingTop: 26,
    paddingBottom: 13,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topPanelVarientsLocofy: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default TopPanelTags;
