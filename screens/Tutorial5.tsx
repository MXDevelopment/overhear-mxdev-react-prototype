import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import ExitContainer from "../components/ExitContainer";

const Tutorial5 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.tutorial5}
      onPress={() => navigation.navigate("LoginOptionsPagelogin")}
    >
      <StatusBar />
      <ExitContainer icon={require("../assets/exit-cross1.png")} />
      <View style={[styles.tutorial51, styles.ellipseFlexBox]}>
        <Text style={styles.takeTimeTo}>Take time to</Text>
        <Text style={[styles.pause, styles.pauseFlexBox]}>PAUSE</Text>
        <View style={styles.pauseImageContainer}>
          <ImageBackground
            style={styles.pauseIcon}
            resizeMode="cover"
            source={require("../assets/pause.png")}
          />
        </View>
        <Text style={[styles.reflectOnTheWordsInspired, styles.pauseFlexBox]}>
          Reflect on the words inspired by the place in which you are now
          standing
        </Text>
        <View style={styles.elipseContainer}>
          <View style={[styles.ellipse, styles.ellipseFlexBox]}>
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
  ellipseFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  pauseFlexBox: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    alignSelf: "stretch",
  },
  takeTimeTo: {
    textAlign: "left",
    height: 16,
    color: "#fff",
    fontFamily: "Sifonn",
    fontSize: 20,
    alignSelf: "stretch",
  },
  pause: {
    fontSize: 75,
  },
  pauseIcon: {
    width: 170,
    height: 168,
  },
  pauseImageContainer: {
    height: 145,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  reflectOnTheWordsInspired: {
    height: 77,
    fontSize: 20,
    textAlign: "center",
  },
  ellipseChild: {
    width: 15,
    height: 15,
  },
  ellipse: {
    flexDirection: "row",
  },
  elipseContainer: {
    height: 26,
    paddingHorizontal: 94,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  tutorial51: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  tutorial5: {
    height: 667,
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#214176",
  },
});

export default Tutorial5;
