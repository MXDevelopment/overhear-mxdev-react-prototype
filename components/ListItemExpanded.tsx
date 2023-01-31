import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

const ListItemExpanded = () => {
  return (
    <View style={styles.listItemExpanded}>
      <View style={styles.listItemFront}>
        <View style={styles.itemView}>
          <View style={styles.logoContainerView}>
            <ImageBackground
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
              source={require("../assets/chevron-stroke9.png")}
            />
          </Pressable>
          <Pressable style={[styles.playPauseContainerPressable, styles.ml8]}>
            <Image
              style={styles.polygonIcon}
              resizeMode="cover"
              source={require("../assets/polygon-2.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.expandedView, styles.mt10]}>
          <View style={styles.textView1}>
            <View style={styles.descriptionContainerView}>
              <Text style={styles.descriptionText}>Description:</Text>
            </View>
            <View style={styles.descriptionTextContainer}>
              <Text style={styles.descriptionOfTheRecording}>
                Description of the Recording
              </Text>
            </View>
            <View style={styles.bioContainerView}>
              <Text style={styles.bioText}>Bio</Text>
            </View>
            <View style={styles.bioTextContainer}>
              <Text style={styles.bioOfTheAuthor}>Bio of the Author</Text>
            </View>
          </View>
          <View style={styles.logoContainerView1}>
            <ImageBackground
              style={styles.logoDark1Icon1}
              resizeMode="cover"
              source={require("../assets/logodark11.png")}
            />
          </View>
        </View>
        <View style={[styles.seperatorContainerView, styles.mt10]} />
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
  mt10: {
    marginTop: 10,
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
    transform: [
      {
        rotate: "-180deg",
      },
    ],
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
  },
  itemView: {
    alignSelf: "stretch",
    backgroundColor: "#2f5ca6",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descriptionText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 79,
    height: 17,
  },
  descriptionContainerView: {
    alignSelf: "stretch",
    height: 19.5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descriptionOfTheRecording: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  descriptionTextContainer: {
    alignSelf: "stretch",
    height: 19.5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bioText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  bioContainerView: {
    alignSelf: "stretch",
    height: 19.5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bioOfTheAuthor: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  bioTextContainer: {
    alignSelf: "stretch",
    height: 19.5,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textView1: {
    alignSelf: "stretch",
    width: 255.35,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoDark1Icon1: {
    position: "relative",
    width: 42,
    height: 59,
    flexShrink: 0,
  },
  logoContainerView1: {
    width: 46.65,
    height: 102,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  expandedView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seperatorContainerView: {
    alignSelf: "stretch",
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    alignItems: "center",
  },
  listItemFront: {
    alignSelf: "stretch",
    backgroundColor: "#2f5ca6",
    height: 197,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listItemExpanded: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemExpanded;
