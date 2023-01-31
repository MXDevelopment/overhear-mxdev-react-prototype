import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type WanderButton3Type = {
  style?: StyleProp<ViewStyle>;
};

const WanderButton3 = ({ style }: WanderButton3Type) => {
  return (
    <View style={[styles.wanderButtonView, style]}>
      <Image
        style={styles.wanderIcon}
        resizeMode="cover"
        source={require("../assets/wander1.png")}
      />
      <Text style={[styles.wanderText, styles.mt9]}>Wander</Text>
    </View>
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
  wanderButtonView: {
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
});

export default WanderButton3;
