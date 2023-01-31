import * as React from "react";
import { useState, useCallback } from "react";
import { Pressable, Image, StyleSheet, Modal, View, Text } from "react-native";
import BurgerMenu from "./BurgerMenu";

const TopPanel = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);

  const openBurgerMenu = useCallback(() => {
    setBurgerMenuVisible(true);
  }, []);

  const closeBurgerMenu = useCallback(() => {
    setBurgerMenuVisible(false);
  }, []);
  return (
    <>
      <View style={styles.topPanelVarientsLocofy}>
        <View style={styles.filterSystem}>
          <View style={styles.burgerOverhearTagsChevron}>
            <View style={styles.burgerOverhear}>
              <Pressable
                style={styles.burgerStroke}
                onPress={openBurgerMenu}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/burger-stroke.png")}
                />
              </Pressable>
              <Text style={[styles.tOPTEXT, styles.ml49]}>OVERHEAR</Text>
              <View style={[styles.rectangleView, styles.ml49]} />
            </View>
            <Image
              style={styles.chevronStrokeIcon}
              resizeMode="cover"
              source={require("../assets/chevron-stroke6.png")}
            />
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={burgerMenuVisible}>
        <View style={styles.burgerMenuOverlay}>
          <Pressable
            style={styles.burgerMenuBg}
            onPress={closeBurgerMenu}
          />
          <BurgerMenu onClose={closeBurgerMenu} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  burgerMenuOverlay: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  burgerMenuBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  ml49: {
    marginLeft: 49,
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  burgerStroke: {
    position: "relative",
    width: 25,
    height: 21,
  },
  tOPTEXT: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 34,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "rgba(217, 217, 217, 0)",
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  burgerOverhear: {
    alignSelf: "stretch",
    height: 34,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chevronStrokeIcon: {
    position: "relative",
    width: 52,
    height: 10,
    flexShrink: 0,
  },
  burgerOverhearTagsChevron: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterSystem: {
    alignSelf: "stretch",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    height: 103,
    flexShrink: 0,
    flexDirection: "column",
    paddingLeft: 12,
    paddingTop: 26,
    paddingBottom: 13,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topPanelVarientsLocofy: {
    alignSelf: "stretch",
    height: 103,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TopPanel;
