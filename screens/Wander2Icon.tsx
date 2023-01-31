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

const Wander2Icon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.wander2Icon}
      resizeMode="cover"
      source={require("../assets/wander21.png")}
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
            source={require("../assets/exit-cross5.png")}
          />
        </Pressable>
      </View>
      <View style={styles.contentView}>
        <View style={styles.frameView}>
          <Text style={styles.aDoseOfMeaningAdPurpose}>
            A dose of meaning ad purpose
          </Text>
        </View>
        <View style={styles.frameView1}>
          <Text style={styles.dailyText}>Daily</Text>
        </View>
        <View style={styles.frameView2}>
          <Text style={styles.weeklyText}>Weekly</Text>
        </View>
        <View style={styles.frameView3}>
          <Text style={styles.monthlyText}>Monthly</Text>
        </View>
        <View style={styles.frameView4}>
          <Text style={styles.curatedByArtistsPoetsAnd}>
            <Text style={styles.curatedByArtists}>
              Curated by artists, poets and writers.
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
  },
  exitCrossPressable: {
    position: "absolute",
    top: 9.86,
    right: 10.05,
    width: 22.55,
    height: 22.28,
  },
  exitContainerView: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "rgba(29, 53, 93, 0)",
    height: 1,
    flexShrink: 0,
  },
  aDoseOfMeaningAdPurpose: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    alignSelf: "stretch",
    height: 40.67,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 28,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dailyText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 40,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "right",
  },
  frameView1: {
    alignSelf: "stretch",
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 62,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  weeklyText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 40,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
  },
  frameView2: {
    alignSelf: "stretch",
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 36,
    paddingRight: 96,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  monthlyText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 40,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
  },
  frameView3: {
    alignSelf: "stretch",
    height: 40.67,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 125,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  curatedByArtists: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  curatedByArtistsPoetsAnd: {
    flex: 1,
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  frameView4: {
    alignSelf: "stretch",
    height: 40.67,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView: {
    alignSelf: "stretch",
    height: 506,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 18,
    paddingVertical: 20,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  wander2Icon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 638,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 32,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Wander2Icon;
