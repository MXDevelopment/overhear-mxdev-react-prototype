import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MoreButton1Type = {
  style?: StyleProp<ViewStyle>;
};

const MoreButton1 = ({ style }: MoreButton1Type) => {
  return (
    <View style={[styles.moreButtonView, style]}>
      <Image
        style={styles.more1Icon}
        resizeMode="cover"
        source={require("../assets/more-1.png")}
      />
      <Text style={[styles.moreText, styles.mt14]}>More</Text>
    </View>
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
  moreButtonView: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MoreButton1;
