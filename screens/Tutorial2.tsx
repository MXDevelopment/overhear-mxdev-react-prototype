import * as React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tutorial2 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.tutorial2}
      onPress={() => navigation.navigate("Tutorial3")}
    >
      <View style={styles.content}>
        <View style={styles.movewalkerParent}>
          <View style={[styles.movewalker, styles.xFrameFlexBox]}>
            <Text style={[styles.move, styles.moveFlexBox]}>MOVE</Text>
            <View style={[styles.walkerImageContainer, styles.ml_19]}>
              <ImageBackground
                style={styles.walkerIcon}
                resizeMode="cover"
                source={require("../assets/walker.png")}
              />
            </View>
            <View style={[styles.xFrame, styles.ml_19, styles.xFrameFlexBox]}>
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
          </View>
          <Text
            style={[
              styles.overhearWorkOnLocationHe,
              styles.mt10,
              styles.moveFlexBox,
            ]}
            numberOfLines={2}
          >
            <Text style={styles.overhearWorkOnContainer}>
              <Text
                style={styles.overhearWorkOn}
              >{`Overhear work on location! `}</Text>
              <Text style={styles.headToA}>Head to a pin on the Map.</Text>
            </Text>
          </Text>
        </View>
        <View style={[styles.elipseContainer, styles.mt57]}>
          <View style={[styles.ellipse, styles.xFrameFlexBox]}>
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
  ml_19: {
    marginLeft: -19,
  },
  mt10: {
    marginTop: 10,
  },
  mt57: {
    marginTop: 57,
  },
  xFrameFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  moveFlexBox: {
    display: "flex",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Sifonn",
    alignSelf: "stretch",
    alignItems: "center",
  },
  move: {
    fontSize: 40,
    width: 124,
    justifyContent: "center",
  },
  walkerIcon: {
    alignSelf: "stretch",
    flex: 1,
  },
  walkerImageContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  exitCross: {
    width: 23,
    height: 22,
  },
  xFrame: {
    paddingTop: 53,
    justifyContent: "center",
  },
  movewalker: {
    alignItems: "center",
    flex: 1,
  },
  overhearWorkOn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  headToA: {
    margin: 0,
  },
  overhearWorkOnContainer: {
    lineBreak: "anywhere",
  },
  overhearWorkOnLocationHe: {
    fontSize: 20,
    height: 40,
  },
  movewalkerParent: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  ellipseChild: {
    width: 15,
    height: 15,
  },
  ellipse: {
    justifyContent: "space-between",
    alignItems: "center",
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
    paddingLeft: 24,
    paddingRight: 11,
    paddingBottom: 50,
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  tutorial2: {
    backgroundColor: "#214176",
    height: 667,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default Tutorial2;
