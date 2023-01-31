import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type BottomPanel1Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomPanel1 = ({ style }: BottomPanel1Type) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomPanelView, style]}>
      <View style={styles.iconsView}>
        <View style={styles.mapButtonView}>
          <Image
            style={styles.mapIcon1}
            resizeMode="cover"
            source={require("../assets/map-icon-1.png")}
          />
          <Text style={[styles.mapText, styles.mt12]}>Map</Text>
        </View>
        <Pressable
          style={styles.libraryButtonPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Library" })
          }
        >
          <Image
            style={styles.library1Icon}
            resizeMode="cover"
            source={require("../assets/library-11.png")}
          />
          <Text style={[styles.libraryText, styles.mt9]}>Library</Text>
        </Pressable>
        <Pressable
          style={styles.wanderButtonPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "WanderSettings1" })
          }
        >
          <Image
            style={styles.wanderIcon}
            resizeMode="cover"
            source={require("../assets/wander1.png")}
          />
          <Text style={[styles.wanderText, styles.mt9]}>Wander</Text>
        </Pressable>
        <Pressable
          style={styles.moreButtonPressable}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "More" })
          }
        >
          <Image
            style={styles.more1Icon}
            resizeMode="cover"
            source={require("../assets/more-1.png")}
          />
          <Text style={[styles.moreText, styles.mt14]}>More</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt9: {
    marginTop: 9,
  },
  mt14: {
    marginTop: 14,
  },
  mapIcon1: {
    position: "relative",
    width: 46,
    height: 40.77,
    flexShrink: 0,
  },
  mapText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  mapButtonView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  library1Icon: {
    position: "relative",
    width: 52,
    height: 46,
    flexShrink: 0,
  },
  libraryText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  libraryButtonPressable: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  wanderIcon: {
    position: "relative",
    width: 47,
    height: 53,
    flexShrink: 0,
  },
  wanderText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  wanderButtonPressable: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  more1Icon: {
    position: "relative",
    width: 50,
    height: 43,
    flexShrink: 0,
  },
  moreText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  moreButtonPressable: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconsView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomPanelView: {
    position: "relative",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#214176",
    width: 376,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default BottomPanel1;
