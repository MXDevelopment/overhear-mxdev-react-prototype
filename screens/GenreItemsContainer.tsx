import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GenreItemsContainer = () => {
  return (
    <View style={styles.genreItemsContainer}>
      <View style={styles.genreItemsView}>
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.poetryText, styles.mt13]}>Poetry</Text>
        <Text style={[styles.musicText, styles.mt13]}>Music</Text>
        <Text style={[styles.shortStoryText, styles.mt13]}>Short Story</Text>
        <Text style={[styles.oralHistoryText, styles.mt13]}>Oral History</Text>
        <Text style={[styles.soundArtText, styles.mt13]}>Sound Art</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt13: {
    marginTop: 13,
  },
  lineIcon: {
    position: "relative",
    width: 345,
    height: 2,
    flexShrink: 0,
  },
  poetryText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  musicText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  shortStoryText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  oralHistoryText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  soundArtText: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 14,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  genreItemsView: {
    alignSelf: "stretch",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    height: 166,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 22,
    paddingBottom: 15,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  genreItemsContainer: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 166,
    flexDirection: "column",
    paddingHorizontal: 26,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default GenreItemsContainer;
