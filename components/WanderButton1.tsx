import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type WanderButton1Type = {
  style?: StyleProp<ViewStyle>;
};

const WanderButton1 = ({ style }: WanderButton1Type) => {
  return (
    <View style={[styles.wanderButtonView, style]}>
      <Image
        style={styles.wanderIcon}
        resizeMode="cover"
        source={require("../assets/wander.png")}
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

export default WanderButton1;
