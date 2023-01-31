import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const WanderSettings2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wanderSettings2View}>
      <View style={styles.statusBarView} />
      <View style={[styles.topPanelText, styles.mt19]}>
        <Pressable style={styles.backButtonPressable}>
          <Pressable
            style={styles.chevronStrokePressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevron-stroke1.png")}
            />
          </Pressable>
        </Pressable>
        <Text style={styles.wANDERText}>WANDER</Text>
      </View>
      <View style={[styles.wanderImageContainer, styles.mt19]}>
        <Image
          style={styles.wanderIcon}
          resizeMode="cover"
          source={require("../assets/wander14.png")}
        />
      </View>
      <Text style={[styles.setFrequencyText, styles.mt19]}>Set frequency</Text>
      <View style={[styles.frequencyView, styles.mt19]}>
        <View style={styles.dailyContainerView}>
          <View style={styles.dailyView}>
            <Text style={styles.dailyText}>{`Daily `}</Text>
          </View>
        </View>
        <View style={[styles.weeklyContainerView, styles.mt17]}>
          <View style={styles.weeklyView}>
            <Text style={styles.weeklyText}>Weekly</Text>
          </View>
        </View>
        <View style={[styles.customContainerView, styles.mt17]}>
          <View style={styles.customView}>
            <Text style={styles.customText}>Custom</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.continueText, styles.mt19]}>continue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt17: {
    marginTop: 17,
  },
  mt19: {
    marginTop: 19,
  },
  statusBarView: {
    alignSelf: "stretch",
    backgroundColor: "#214176",
    height: statusBarHeight,
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
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 15,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wANDERText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 34,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topPanelText: {
    alignSelf: "stretch",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    height: 91,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 33,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wanderIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 102,
    flexShrink: 0,
  },
  wanderImageContainer: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  setFrequencyText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 30,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  dailyText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  dailyView: {
    alignSelf: "stretch",
    borderRadius: 22,
    backgroundColor: "#29b6f6",
    height: 38,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 37,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  dailyContainerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 52,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  weeklyText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  weeklyView: {
    alignSelf: "stretch",
    borderRadius: 22,
    backgroundColor: "#29b6f6",
    height: 38,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 37,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  weeklyContainerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 52,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  customText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  customView: {
    alignSelf: "stretch",
    borderRadius: 22,
    backgroundColor: "#29b6f6",
    height: 38,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 37,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  customContainerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 52,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frequencyView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  continueText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  wanderSettings2View: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: 667,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 104,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default WanderSettings2;
