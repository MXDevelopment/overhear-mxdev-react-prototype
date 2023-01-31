import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import ExitContainer from "../components/ExitContainer";

const Tutorial1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.tutorial1}
      onPress={() => navigation.navigate("Tutorial2")}
    >
      <StatusBar />
      <ExitContainer icon={require("../assets/exit-cross.png")} />
      <View style={[styles.content, styles.contentFlexBox]}>
        <ImageBackground
          style={styles.ovhLogoartboard12x1}
          resizeMode="cover"
          source={require("../assets/ovhlogoartboard12x1.png")}
        />
        <Text
          style={[styles.welcomeToOverhear, styles.welcomeToOverhearFlexBox]}
        >
          Welcome to Overhear
        </Text>
        <Text
          style={[styles.swipeToStartTutorial, styles.welcomeToOverhearFlexBox]}
        >
          Swipe to start tutorial
        </Text>
        <View style={styles.elipseContainer}>
          <View style={[styles.ellipse, styles.contentFlexBox]}>
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
  contentFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  welcomeToOverhearFlexBox: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    alignSelf: "stretch",
  },
  ovhLogoartboard12x1: {
    width: 186,
    height: 251,
  },
  welcomeToOverhear: {
    fontSize: 40,
  },
  swipeToStartTutorial: {
    fontSize: 20,
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
  content: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  tutorial1: {
    height: 667,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#214176",
  },
});

export default Tutorial1;
