import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
  View,
  Text,
} from "react-native";

const CollectPlay = () => {
  return (
    <View style={styles.collectPlayView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.contentView}>
        <View style={styles.logoExitView}>
          <ImageBackground
            style={styles.oVHLOGOArtboard12x1}
            resizeMode="cover"
            source={require("../assets/ovhlogoartboard12x15.png")}
          />
          <Image
            style={[styles.exitCrossIcon, styles.ml64]}
            resizeMode="cover"
            source={require("../assets/exit-cross10.png")}
          />
        </View>
        <Text style={styles.recordingTitleText}>Recording title</Text>
        <Pressable style={styles.polygonPressable}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={styles.polygonIcon}
            resizeMode="cover"
            source={require("../assets/polygon-21.png")}
          />
        </Pressable>
        <View style={styles.frameView}>
          <Text style={styles.takeAMomentLookUpPutHe}>
            <Text style={styles.takeAMoment}>Take a moment, look up,</Text>
            <Text
              style={styles.putHeadphonesOn}
            >{`Put headphones on and your phone in your pocket, `}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml64: {
    marginLeft: 64,
  },
  oVHLOGOArtboard12x1: {
    position: "relative",
    width: 117,
    height: 144,
    flexShrink: 0,
  },
  exitCrossIcon: {
    position: "relative",
    width: 22.55,
    height: 22.28,
    flexShrink: 0,
  },
  logoExitView: {
    flexDirection: "row",
    paddingLeft: 122,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  recordingTitleText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 40,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
  },
  vectorIcon: {
    position: "absolute",
    height: "71.59%",
    width: "46.42%",
    top: "17.61%",
    right: "26.61%",
    bottom: "10.8%",
    left: "26.97%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
  },
  polygonIcon: {
    position: "absolute",
    height: "82.65%",
    width: "72.9%",
    top: "8.68%",
    right: "2.1%",
    bottom: "8.68%",
    left: "25%",
    borderRadius: 4,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  polygonPressable: {
    position: "relative",
    width: 152,
    height: 139,
    flexShrink: 0,
  },
  takeAMoment: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  putHeadphonesOn: {
    margin: 0,
  },
  takeAMomentLookUpPutHe: {
    flex: 1,
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
  },
  frameView: {
    alignSelf: "stretch",
    height: 103,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 26,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  collectPlayView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 667,
    flexDirection: "column",
    paddingHorizontal: 13,
    paddingBottom: 40,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default CollectPlay;
