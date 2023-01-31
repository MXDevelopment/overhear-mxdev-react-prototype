import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const QRPin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.qRPinView}>
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
              source={require("../assets/chevron-stroke1.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={[styles.oVERHEARText, styles.ml_54]}>OVERHEAR</Text>
      </View>
      <View style={styles.containerView}>
        <View style={styles.textContainerView}>
          <Text style={styles.welcomeToQRProjectFindXR}>
            Welcome to QR project find x recordings from the building
          </Text>
        </View>
        <View style={[styles.listItemsView, styles.mt14]}>
          <View style={styles.qRRecordingView}>
            <View style={styles.qRRecoringList}>
              <Text style={styles.qRRecording1}>QR Recording 1</Text>
              <Image
                style={[styles.checkboxIcon, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/checkbox.png")}
              />
            </View>
            <View style={styles.separatorView} />
          </View>
          <View style={[styles.qRRecordingView1, styles.mt3]}>
            <View style={styles.qRRecoringList1}>
              <Text style={styles.qRRecording11}>QR Recording 1</Text>
              <Image
                style={[styles.checkboxIcon1, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/checkbox.png")}
              />
            </View>
            <View style={styles.separatorView1} />
          </View>
          <View style={[styles.qRRecordingView2, styles.mt3]}>
            <View style={styles.qRRecoringList2}>
              <Text style={styles.qRRecording12}>QR Recording 1</Text>
              <Image
                style={[styles.checkboxIcon2, styles.ml6]}
                resizeMode="cover"
                source={require("../assets/checkbox.png")}
              />
            </View>
            <View style={styles.separatorView2} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml_54: {
    marginLeft: -54,
  },
  ml6: {
    marginLeft: 6,
  },
  mt3: {
    marginTop: 3,
  },
  mt14: {
    marginTop: 14,
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
    width: 9.01,
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
  welcomeToQRProjectFindXR: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 26,
    fontFamily: "Sifonn",
    color: "#000",
    textAlign: "center",
  },
  textContainerView: {
    alignSelf: "stretch",
    height: 124,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 46,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  qRRecording1: {
    position: "relative",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  checkboxIcon: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  qRRecoringList: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  separatorView: {
    position: "relative",
    backgroundColor: "#c4c4c4",
    width: 375,
    height: 1,
    flexShrink: 0,
  },
  qRRecordingView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 68,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  qRRecording11: {
    position: "relative",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  checkboxIcon1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  qRRecoringList1: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  separatorView1: {
    position: "relative",
    backgroundColor: "#c4c4c4",
    width: 375,
    height: 1,
    flexShrink: 0,
  },
  qRRecordingView1: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 68,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  qRRecording12: {
    position: "relative",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  checkboxIcon2: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  qRRecoringList2: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  separatorView2: {
    position: "relative",
    backgroundColor: "#c4c4c4",
    width: 375,
    height: 1,
    flexShrink: 0,
  },
  qRRecordingView2: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 68,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  listItemsView: {
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  qRPinView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: 667,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default QRPin;
