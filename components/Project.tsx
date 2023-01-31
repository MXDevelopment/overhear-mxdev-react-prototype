import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ProjectType = {
  style?: StyleProp<ViewStyle>;
};

const Project = ({ style }: ProjectType) => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        style={styles.Project1Icon}
        resizeMode="cover"
        source={require("../assets/verve-1.png")}
      />
      <Text style={[styles.Project, styles.ml10]}>
        Verve Poetry Festival
      </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  Project1Icon: {
    position: "relative",
    width: 35,
    height: 35,
    flexShrink: 0,
  },
  Project: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 12,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ProjectPressable: {
    alignSelf: "stretch",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Project;
