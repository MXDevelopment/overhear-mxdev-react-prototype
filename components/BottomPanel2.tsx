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

type BottomPanel2Type = {
  style?: StyleProp<ViewStyle>;
};

const BottomPanel2 = ({ style }: BottomPanel2Type) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomPanelView, style]}>
      <View style={styles.panelView}>
        <View style={styles.iconsView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: 12,
  },
  mt9: {
    marginTop: 9,
  },
  mt14: {
    marginTop: 14,
  },
  iconsView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 34,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  panelView: {
    alignSelf: "stretch",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#214176",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomPanelView: {
    position: "relative",
    width: 376,
    height: 106,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default BottomPanel2;
