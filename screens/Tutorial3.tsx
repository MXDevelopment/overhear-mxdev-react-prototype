import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import ExitContainer from "../components/ExitContainer";

const Tutorial3 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.tutorial3}
      onPress={() => navigation.navigate("Tutorial4")}
    >
      <StatusBar />
      <ExitContainer />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={[styles.auto, styles.autoTypo, styles.autoTypo1]}>
            auto
          </Text>
          <Text style={[styles.collect, styles.autoTypo]}>COLLECT</Text>
          <Text style={[styles.whenInRange, styles.autoTypo, styles.autoTypo1]}>
            when in range
          </Text>
        </View>
        <View style={[styles.mapImageContainer, styles.containerFlexBox]}>
          <ImageBackground
            style={styles.autoCollectIcon}
            resizeMode="cover"
            source={require("../assets/autocollect.png")}
          />
        </View>
        <View style={styles.elipseContainer}>
          <View style={[styles.ellipse, styles.containerFlexBox]}>
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-4.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  autoTypo: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    position: "absolute",
  },
  autoTypo1: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    position: "absolute",
  },
  auto: {
    top: 0,
    width: 117,
    left: 0,
  },
  collect: {
    top: 28,
    fontSize: 40,
    width: 308,
    left: 0,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    position: "absolute",
  },
  whenInRange: {
    top: 75,
    left: 96,
    width: 212,
  },
  textContainer: {
    height: 95,
    alignSelf: "stretch",
  },
  autoCollectIcon: {
    width: 275,
    height: 440,
  },
  mapImageContainer: {
    justifyContent: "center",
    flex: 1,
  },
  ellipseChild: {
    width: 15,
    height: 15,
  },
  ellipse: {
    justifyContent: "space-between",
    flex: 1,
  },
  elipseContainer: {
    height: 26,
    paddingHorizontal: 94,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 50,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  tutorial3: {
    height: 667,
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#214176",
  },
});

export default Tutorial3;
