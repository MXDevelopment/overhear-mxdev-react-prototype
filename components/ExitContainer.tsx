import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ExitContainerType = {
  icon?: ImageSourcePropType;
};

const ExitContainer = ({
  icon = require("../assets/exit-cross.png"),
}: ExitContainerType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.exitContainerView}>
      <Pressable
        style={styles.exitCrossPressable}
        onPress={() => navigation.navigate("LoginOptionsPage")}
      >
        <Image style={styles.icon} resizeMode="cover" source={icon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  exitCrossPressable: {
    position: "relative",
    width: 22.55,
    height: 22.28,
  },
  exitContainerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingRight: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
});

export default ExitContainer;
