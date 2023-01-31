import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

type LibraryButton2Type = {
  style?: StyleProp<ViewStyle>;
};

const LibraryButton2 = ({ style }: LibraryButton2Type) => {
  return (
    <View style={[styles.libraryButtonView, style]}>
      <Image
        style={styles.library1Icon}
        resizeMode="cover"
        source={require("../assets/library-11.png")}
      />
      <Text style={[styles.libraryText, styles.mt9]}>Library</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt9: {
    marginTop: 9,
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
  libraryButtonView: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LibraryButton2;
