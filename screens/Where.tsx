import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Where = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.whereView}>
      <View style={styles.statusBarView} />
      <View style={styles.overhearContainerView}>
        <Pressable
          style={styles.backButtonPressable}
          onPress={() => navigation.goBack()}
        >
          <Pressable
            style={styles.chevronStrokePressable}
            onPress={() => navigation.navigate("LoginOptionsPage")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevron-stroke3.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={[styles.oVERHEARText, styles.ml_54]}>OVERHEAR</Text>
      </View>
      <View style={styles.containerView}>
        <View style={styles.recordingTitleDecriptionCon}>
          <Text style={styles.recoringTitleText}>Recoring Title</Text>
          <Text style={styles.recoringDescriptionARecod}>
            Recoring Description - a recoding about this painting
          </Text>
        </View>
        <View style={styles.iconWhereContainerView}>
          <Image
            style={styles.oVHLOGOArtboard12x1}
            resizeMode="cover"
            source={require("../assets/ovh-logoartboard-12x-1.png")}
          />
          <View style={[styles.frameView, styles.ml28]}>
            <Text style={styles.whereText}>Where</Text>
            <Text style={styles.youCanFindThisRecordingIn}>
              You can find this recording in the cafe on the 3rd floor
            </Text>
          </View>
        </View>
        <Pressable style={styles.openQRScanner}>
          <View style={styles.qRImageContainer}>
            <Image
              style={styles.nounQRCodeScanner14331731}
              resizeMode="cover"
              source={require("../assets/noun-qr-code-scanner-1433173-1.png")}
            />
          </View>
          <Text style={[styles.openScannerText, styles.mt41]}>
            Open Scanner
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml_54: {
    marginLeft: -54,
  },
  ml28: {
    marginLeft: 28,
  },
  mt41: {
    marginTop: 41,
  },
  statusBarView: {
    alignSelf: "stretch",
    backgroundColor: "#214176",
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
  chevronStrokePressable: {
    position: "relative",
    width: 9,
    height: 18,
  },
  backButtonPressable: {
    flexDirection: "row",
    paddingLeft: 32,
    paddingBottom: 8,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  oVERHEARText: {
    flex: 1,
    position: "relative",
    fontSize: 34,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  overhearContainerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingTop: 31,
    paddingBottom: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  recoringTitleText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 25,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
    height: 20,
  },
  recoringDescriptionARecod: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 375,
    height: 54,
  },
  recordingTitleDecriptionCon: {
    height: 110,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  },
  oVHLOGOArtboard12x1: {
    position: "relative",
    width: 83,
    height: 105,
    flexShrink: 0,
  },
  whereText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  youCanFindThisRecordingIn: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
    height: 77,
  },
  frameView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconWhereContainerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingLeft: 35,
    paddingRight: 19,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  nounQRCodeScanner14331731: {
    position: "relative",
    width: 141,
    height: 141,
    flexShrink: 0,
  },
  qRImageContainer: {
    width: 356,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  openScannerText: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
    width: 330,
  },
  openQRScanner: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 0,
  },
  containerView: {
    alignSelf: "stretch",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 56,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  whereView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: 682,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Where;
