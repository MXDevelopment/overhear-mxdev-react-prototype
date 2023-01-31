import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import Items1 from "../components/Items";
import StatusBar from "../components/StatusBar";

const Library = () => {
  const [itemContainerFlatListData, setItemContainerFlatListData] = useState([
    <Items1 />,
  ]);

  return (
    <View style={[styles.library, styles.itemBg]}>
      <StatusBar />
      <View style={[styles.topPanelText, styles.panelBg]}>
        <Text style={[styles.libraryText, styles.mapFlexBox]}>LIBRARY</Text>
      </View>
      <ScrollView
        style={styles.list}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listScrollViewContent}
      >
        <FlatList
          style={styles.list}
          data={itemContainerFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.itemContainerFlatListContent}
              />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainerFlatListContent: {
    flexDirection: "column",
  },
  listScrollViewContent: {
    flexDirection: "column",
  },
  itemBg: {
    backgroundColor: "#2f5ca6",
    alignItems: "center",
  },
  panelBg: {
    backgroundColor: "#214176",
    alignSelf: "stretch",
  },
  mapFlexBox: {
    textAlign: "center",
    color: "#fff",
  },
  deleteFlexBox: {
    zIndex: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  itemPosition: {
    right: 0,
    top: 0,
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "left",
    color: "#000",
    fontFamily: "Inter",
    alignSelf: "stretch",
    flex: 1,
  },
  containerFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  libraryText: {
    fontSize: 34,
    fontFamily: "Sifonn",
    alignSelf: "stretch",
  },
  topPanelText: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingBottom: 42,
    paddingTop: 26,
    alignItems: "center",
  },
  trashIcon: {
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  delete: {
    backgroundColor: "#236df6",
    paddingLeft: 19,
    paddingRight: 18,
    paddingBottom: 16,
    height: 84,
    paddingTop: 16,
  },
  logoDark1Icon: {
    width: 42,
    height: 59,
  },
  logoContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  titleContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  author: {
    fontSize: 14,
    fontWeight: "300",
  },
  text: {
    paddingHorizontal: 0,
    paddingVertical: 13,
    zIndex: 1,
    alignSelf: "stretch",
    flex: 1,
  },
  chevronStrokeIcon: {
    height: 10,
    width: 52,
  },
  chevronContainer: {
    zIndex: 2,
  },
  playpauseContainerChild: {
    width: 31,
    height: 36,
  },
  playpauseContainer: {
    zIndex: 3,
    flexDirection: "row",
  },
  seperatorContainer: {
    marginTop: 38,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    backgroundColor: "#c4c4c4",
    zIndex: 4,
    position: "absolute",
  },
  item: {
    left: 0,
    paddingHorizontal: 8,
    paddingVertical: 16,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  items: {
    flexDirection: "row",
    overflow: "hidden",
    height: 84,
    alignSelf: "stretch",
    alignItems: "center",
  },
  itemContainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  list: {
    alignSelf: "stretch",
    flex: 1,
  },
  mapIcon1: {
    width: 46,
    height: 41,
  },
  map: {
    fontSize: 12,
    fontFamily: "Raleway",
  },
  mapbutton: {
    alignItems: "center",
  },
  library1Icon: {
    height: 46,
    width: 52,
  },
  wanderIcon: {
    width: 47,
    height: 53,
  },
  wanderbutton: {
    alignItems: "flex-end",
  },
  more1Icon: {
    height: 43,
    width: 50,
  },
  icons: {
    paddingHorizontal: 34,
    paddingVertical: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  panel: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 106,
    alignItems: "center",
  },
  bottomPanelContainer: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    alignItems: "center",
  },
  library: {
    width: "100%",
    height: 667,
    alignItems: "center",
    flex: 1,
  },
});

export default Library;
