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

const Wander1Icon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.wander1Icon}
      resizeMode="cover"
      source={require("../assets/wander110.png")}
    >
      <View style={styles.statusBarView} />
      <View style={[styles.exitContainerView, styles.mt26]}>
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
      <View style={[styles.contentView, styles.mt26]}>
        <Image
          style={styles.wanderIcon}
          resizeMode="cover"
          source={require("../assets/wander19.png")}
        />
        <Text style={[styles.welcomeToWanders, styles.mt54]}>
          Welcome to Wanders
        </Text>
        <Text style={[styles.swipeToStartTutorial, styles.mt54]}>
          Swipe to start tutorial
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.mt54]}
          resizeMode="cover"
          source={require("../assets/ellipse.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt54: {
    marginTop: 54,
  },
  mt26: {
    marginTop: 26,
  },
  statusBarView: {
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
    alignItems: "center",
    justifyContent: "flex-end",
  },
  wanderIcon: {
    position: "relative",
    width: 147,
    height: 166,
    flexShrink: 0,
  },
  welcomeToWanders: {
    position: "relative",
    fontSize: 40,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    width: 325,
  },
  swipeToStartTutorial: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 119,
    height: 15,
    flexShrink: 0,
    display: "none",
  },
  contentView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wander1Icon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 667,
    flexDirection: "column",
    paddingHorizontal: 2,
    paddingBottom: 92,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Wander1Icon;
