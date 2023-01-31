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

const Wander5Icon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.wander5Icon}
      resizeMode="cover"
      source={require("../assets/wander51.png")}
    >
      <View style={styles.statusBarView} />
      <View style={[styles.exitContainerView, styles.mt19]}>
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
      <View style={[styles.contentView, styles.mt19]}>
        <Text style={styles.bEHERENOW}>
          <Text style={styles.bEText}>BE</Text>
          <Text style={styles.hEREText}>HERE</Text>
          <Text style={styles.nOWText}>NOW</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt19: {
    marginTop: 19,
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
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bEText: {
    marginBlockStart: 0,
    marginBlockEnd: 20,
  },
  hEREText: {
    marginBlockStart: 0,
    marginBlockEnd: 20,
  },
  nOWText: {
    margin: 0,
  },
  bEHERENOW: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 130,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  contentView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  wander5Icon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 637,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Wander5Icon;
