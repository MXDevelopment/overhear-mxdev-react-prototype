import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type MapButtonType = {
  style?: StyleProp<ViewStyle>;
};

const MapButton = ({ style }: MapButtonType) => {
  return (
    <View style={[styles.mapButtonView, style]}>
      <Image
        style={styles.mapIcon1}
        resizeMode="cover"
        source={require("../assets/map-icon-1.png")}
      />
      <Text style={[styles.mapText, styles.mt12]}>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
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
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MapButton;
