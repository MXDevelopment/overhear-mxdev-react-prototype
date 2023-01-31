import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";

const TopPannelFilter = () => {
  const [searchContainerTextInput, setSearchContainerTextInput] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <View style={styles.topPannelFilter}>
      <View style={styles.topPanelVarientsLocofy}>
        <View style={styles.filterSystemView}>
          <View style={styles.burgerOverhearTagsChevronView}>
            <View style={styles.burgerOverhearView}>
              <Image
                style={styles.burgerStrokeIcon}
                resizeMode="cover"
                source={require("../assets/burger-stroke1.png")}
              />
              <Text style={[styles.tOPTEXT, styles.ml49]}>OVERHEAR</Text>
              <View style={[styles.rectangleView, styles.ml49]} />
            </View>
            <View style={styles.tagsView}>
              <View style={styles.tagView}>
                <View style={styles.tagXText}>
                  <Image
                    style={styles.exitCrossIcon}
                    resizeMode="cover"
                    source={require("../assets/exit-cross1.png")}
                  />
                  <Text style={[styles.poetryText, styles.ml4]}>Poetry</Text>
                </View>
              </View>
              <View style={[styles.tagView1, styles.ml21]}>
                <View style={styles.tagXText1}>
                  <Image
                    style={styles.exitCrossIcon1}
                    resizeMode="cover"
                    source={require("../assets/exit-cross1.png")}
                  />
                  <Text style={[styles.poetryText1, styles.ml4]}>Poetry</Text>
                </View>
              </View>
              <View style={[styles.tagView2, styles.ml21]}>
                <View style={styles.tagXText2}>
                  <Image
                    style={styles.exitCrossIcon2}
                    resizeMode="cover"
                    source={require("../assets/exit-cross1.png")}
                  />
                  <Text style={[styles.poetryText2, styles.ml4]}>Poetry</Text>
                </View>
              </View>
              <View style={[styles.tagView3, styles.ml21]}>
                <View style={styles.tagXText3}>
                  <Image
                    style={styles.exitCrossIcon3}
                    resizeMode="cover"
                    source={require("../assets/exit-cross1.png")}
                  />
                  <Text style={[styles.poetryText3, styles.ml4]}>Poetry</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.chevronIcon}
              resizeMode="cover"
              source={require("../assets/chevron.png")}
            />
          </View>
          <RNKTextInput
            style={[styles.searchContainerRNKTextInput, styles.mt8]}
            placeholder="Search #tags"
            value={searchContainerTextInput}
            onChangeText={setSearchContainerTextInput}
            accessoryLeft={<RNKIcon name="magnify" pack="material" />}
            placeholderTextColor="#000"
            textStyle={styles.searchContainerTextInputText}
          />
          <View style={[styles.dropdownView, styles.mt8]}>
            <DropDownPicker
              open={dropdownOpen}
              setOpen={setDropdownOpen}
              value={dropdownValue}
              setValue={setDropdownValue}
              placeholder="Pick Genre"
              labelStyle={styles.dropdownValue}
            />
          </View>
          <Pressable
            style={[styles.submitPressable, styles.mt8]}
            onPress={() => {}}
          >
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml49: {
    marginLeft: 49,
  },
  ml4: {
    marginLeft: 4,
  },
  ml21: {
    marginLeft: 21,
  },
  searchContainerTextInputText: {
    color: "#000",
  },
  dropdownValue: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Raleway",
  },
  mt8: {
    marginTop: 8,
  },
  burgerStrokeIcon: {
    position: "relative",
    width: 24.5,
    height: 21,
    flexShrink: 0,
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
  burgerOverhearView: {
    alignSelf: "stretch",
    height: 40,
    flexShrink: 0,
    flexDirection: "row",
    paddingLeft: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  exitCrossIcon: {
    position: "relative",
    width: 11.26,
    height: 11.09,
    flexShrink: 0,
  },
  poetryText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  tagXText: {
    position: "absolute",
    top: 3,
    left: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagView: {
    position: "relative",
    width: 75,
    height: 23,
    flexShrink: 0,
    display: "none",
  },
  exitCrossIcon1: {
    position: "relative",
    width: 11.26,
    height: 11.09,
    flexShrink: 0,
  },
  poetryText1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  tagXText1: {
    position: "absolute",
    top: 3,
    left: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagView1: {
    position: "relative",
    width: 75,
    height: 23,
    flexShrink: 0,
    display: "none",
  },
  exitCrossIcon2: {
    position: "relative",
    width: 11.26,
    height: 11.09,
    flexShrink: 0,
  },
  poetryText2: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  tagXText2: {
    position: "absolute",
    top: 3,
    left: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagView2: {
    position: "relative",
    width: 75,
    height: 23,
    flexShrink: 0,
    display: "none",
  },
  exitCrossIcon3: {
    position: "relative",
    width: 11.26,
    height: 11.09,
    flexShrink: 0,
  },
  poetryText3: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  tagXText3: {
    position: "absolute",
    top: 3,
    left: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagView3: {
    position: "relative",
    width: 75,
    height: 23,
    flexShrink: 0,
  },
  tagsView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    display: "none",
  },
  chevronIcon: {
    position: "relative",
    width: 51.31,
    height: 9.46,
    flexShrink: 0,
    display: "none",
  },
  burgerOverhearTagsChevronView: {
    alignSelf: "stretch",
    height: 57.5,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainerRNKTextInput: {
    alignSelf: "stretch",
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 36,
    paddingVertical: 3,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dropdownView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 43,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  submitText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "center",
  },
  submitPressable: {
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 112,
    height: 30,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterSystemView: {
    alignSelf: "stretch",
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    flexDirection: "column",
    paddingLeft: 12,
    paddingTop: 9,
    paddingBottom: 26,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topPanelVarientsLocofy: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topPannelFilter: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 199,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default TopPannelFilter;
