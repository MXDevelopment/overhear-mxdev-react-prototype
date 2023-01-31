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

type WanderButtonType = {
  style?: StyleProp<ViewStyle>;
};

const WanderButton = ({ style }: WanderButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.wanderButtonPressable, style]}
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
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
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
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default WanderButton;
