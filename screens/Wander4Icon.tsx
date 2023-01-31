import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Wander4Icon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.wander4Icon}
      resizeMode="cover"
      source={require("../assets/wander41.png")}
    >
      <View style={styles.statusBarView} />
      <View style={styles.exitContainerView}>
        <Pressable
          style={styles.exitCrossPressable}
          onPress={() => navigation.navigate("LoginOptionsPage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/exit-cross.png")}
          />
        </Pressable>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.cOLLECTText}>COLLECT</Text>
        <View style={[styles.lowerThirdView, styles.mt41]}>
          <Text style={styles.yourselfAnInsightA}>
            <Text style={styles.yourselfText}>...yourself.</Text>
            <Text style={styles.anInsightText}>...an insight.</Text>
            <Text style={styles.aPerspectiveText}>...a perspective.</Text>
          </Text>
          <Text style={styles.throughCreativeAudioJustA}>
            Through creative audio just a short walk from your current location.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt41: {
    marginTop: 41,
  },
  statusBarView: {
    alignSelf: "stretch",
    height: 51,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  exitCrossPressable: {
    position: "relative",
    width: 22.55,
    height: 22.28,
  },
  exitContainerView: {
    alignSelf: "stretch",
    backgroundColor: "rgba(29, 53, 93, 0)",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  cOLLECTText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 55,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  yourselfText: {
    marginBlockStart: 0,
    marginBlockEnd: 20,
  },
  anInsightText: {
    marginBlockStart: 0,
    marginBlockEnd: 20,
  },
  aPerspectiveText: {
    margin: 0,
  },
  yourselfAnInsightA: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 35,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  throughCreativeAudioJustA: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 25,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  lowerThirdView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 110,
    paddingBottom: 58,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 14,
    paddingTop: 19,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wander4Icon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 638,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Wander4Icon;
