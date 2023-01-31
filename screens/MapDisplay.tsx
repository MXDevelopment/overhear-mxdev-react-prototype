import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text, Dimensions } from "react-native";
import TopPanel from "../components/TopPanel";
import MapContainer from "../components/MapContainer";
import StatusBar from "../components/StatusBar";

const MapDisplay = () => {
  
  
  return (
    <View style={styles.mapDisplayView}>
   <MapContainer />
      <View style={styles.statusBarTopPanel}>
      <StatusBar />
        <TopPanel />
      </View>
      
        <View style={styles.mapIconsView}>
          <Pressable style={styles.locationPin1Pressable} onPress={() => {}}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/locationpin-1.png")}
            />
          </Pressable>
          <Image
            style={styles.locationUser1Icon}
            resizeMode="cover"
            source={require("../assets/locationuser-1.png")}
          />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  statusBarTopPanel: {
    alignSelf: "stretch",
    height: 220,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  locationPin1Pressable: {
    position: "relative",
    width: 50,
    height: 53.28,
  },
  locationUser1Icon: {
    position: "relative",
    width: 50,
    height: 54.62,
    flexShrink: 0,
  },
  mapIconsView: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mapDisplayView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default MapDisplay;
