import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tutorial4 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.tutorial4}
      onPress={() => navigation.navigate("Tutorial5")}
    >
      <View style={styles.statusBar} />
      <View style={styles.exitContainer}>
        <Pressable
          style={styles.exitCross}
          onPress={() => navigation.navigate("LoginOptionsPagelogin")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/exit-cross.png")}
          />
        </Pressable>
      </View>
      <View style={styles.tutorial41}>
        <ImageBackground
          style={styles.listen1Icon}
          resizeMode="cover"
          source={require("../assets/listen1.png")}
        />
        <View
          style={[
            styles.toWhatYouveFoundByTappinWrapper,
            styles.mt41,
            styles.elipseContainerSpaceBlock,
          ]}
        >
          <Text style={styles.toWhatYouveFoundByTappin} numberOfLines={2}>
            ...to what you’ve found by tapping “Library”
          </Text>
        </View>
        <View
          style={[
            styles.elipseContainer,
            styles.mt41,
            styles.elipseContainerSpaceBlock,
          ]}
        >
          <View style={styles.ellipse}>
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.ellipseChild}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
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
  mt41: {
    marginTop: 41,
  },
  elipseContainerSpaceBlock: {
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  statusBar: {
    height: 51,
    backgroundColor: "#1d355d",
    alignSelf: "stretch",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  exitCross: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 23,
    height: 22,
  },
  exitContainer: {
    width: 372,
    height: 41,
    backgroundColor: "#1d355d",
  },
  listen1Icon: {
    width: 375,
    height: 427,
  },
  toWhatYouveFoundByTappin: {
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  toWhatYouveFoundByTappinWrapper: {
    paddingHorizontal: 32,
    flexDirection: "row",
  },
  ellipseChild: {
    width: 15,
    height: 15,
  },
  ellipse: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  elipseContainer: {
    height: 26,
    paddingHorizontal: 123,
    alignItems: "center",
  },
  tutorial41: {
    paddingBottom: 50,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  tutorial4: {
    backgroundColor: "#214176",
    height: 667,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default Tutorial4;
