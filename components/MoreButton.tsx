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

type MoreButtonType = {
  style?: StyleProp<ViewStyle>;
};

const MoreButton = ({ style }: MoreButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.moreButtonPressable, style]}
      onPress={() => navigation.navigate("BottomTabsRoot", { screen: "More" })}
    >
      <Image
        style={styles.more1Icon}
        resizeMode="cover"
        source={require("../assets/more-1.png")}
      />
      <Text style={[styles.moreText, styles.mt14]}>More</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
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
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MoreButton;
