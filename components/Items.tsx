import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

const Items = () => {
  return (
    <View style={styles.itemsView}>
      <View style={styles.deleteView}>
        <Image
          style={styles.trashIcon}
          resizeMode="cover"
          source={require("../assets/trash.png")}
        />
      </View>
      <View style={styles.itemView}>
        <View style={styles.logoContainerView}>
          <Image
            style={styles.logoDark1Icon}
            resizeMode="cover"
            source={require("../assets/logodark-1.png")}
          />
        </View>
        <View style={[styles.textView, styles.ml8]}>
          <View style={styles.titleContainerView}>
            <Text style={styles.titleText}>Title</Text>
          </View>
          <View style={[styles.authorContainerView, styles.mt4]}>
            <Text style={styles.authorText}>Author</Text>
          </View>
        </View>
        <Pressable style={[styles.chevronContainerPressable, styles.ml8]}>
          <Image
            style={styles.chevronStrokeIcon}
            resizeMode="cover"
            source={require("../assets/chevron-stroke2.png")}
          />
        </Pressable>
        <Pressable style={[styles.playPauseContainerPressable, styles.ml8]}>
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-2.png")}
          />
        </Pressable>
        <View style={[styles.seperatorContainerView, styles.ml8]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  ml8: {
    marginLeft: 8,
  },
  trashIcon: {
    position: "relative",
    width: 50,
    height: 50,
    flexShrink: 0,
    overflow: "hidden",
  },
  deleteView: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#236df6",
    height: 84,
    flexDirection: "row",
    paddingLeft: 19,
    paddingTop: 16,
    paddingRight: 18,
    paddingBottom: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  logoDark1Icon: {
    position: "relative",
    width: 42,
    height: 59,
    flexShrink: 0,
  },
  logoContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  titleText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  titleContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  authorText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  authorContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 13,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  chevronStrokeIcon: {
    position: "relative",
    width: 51.65,
    height: 10.46,
    flexShrink: 0,
  },
  chevronContainerPressable: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  polygonIcon: {
    position: "relative",
    width: 31,
    height: 36,
    flexShrink: 0,
  },
  playPauseContainerPressable: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  seperatorContainerView: {
    position: "absolute",
    marginTop: 38,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    backgroundColor: "#c4c4c4",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 4,
  },
  itemView: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#2f5ca6",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  itemsView: {
    alignSelf: "stretch",
    height: 84,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
});

export default Items;
