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

type LibraryButtonType = {
  style?: StyleProp<ViewStyle>;
};

const LibraryButton = ({ style }: LibraryButtonType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.libraryButtonPressable, style]}
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
  libraryButtonPressable: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LibraryButton;
