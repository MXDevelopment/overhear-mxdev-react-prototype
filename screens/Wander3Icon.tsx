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

const Wander3Icon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.wander3Icon}
      resizeMode="cover"
      source={require("../assets/wander31.png")}
    >
      <View style={styles.statusBarView} />
      <View style={[styles.exitContainerView, styles.mt13]}>
        <Pressable
          style={styles.exitCrossPressable}
          onPress={() => navigation.navigate("LoginOptionsPage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/exit-cross13.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.contentView, styles.mt13]}>
        <Text style={styles.setWalkLengthAndWanderZon}>
          <Text style={styles.setWalkLength}>
            Set walk length and Wander zones
          </Text>
        </Text>
        <Text style={[styles.toTuneYourExperience, styles.mt213]}>
          <Text style={styles.toTuneYour}>to tune your experience</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt213: {
    marginTop: 213,
  },
  mt13: {
    marginTop: 13,
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
    paddingRight: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  setWalkLength: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  setWalkLengthAndWanderZon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 35,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  toTuneYour: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  toTuneYourExperience: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  contentView: {
    alignSelf: "stretch",
    height: 409,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 93,
    paddingTop: 84,
    paddingBottom: 164,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wander3Icon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 638,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Wander3Icon;
