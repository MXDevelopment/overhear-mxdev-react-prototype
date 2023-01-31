import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import StatusBar from "../components/StatusBar";

const WanderSettings1 = () => {
  const navigation = useNavigation();
  const [minValue, setMinValue] = React.useState(1);
  const [maxValue, setMaxValue] = React.useState(60);

  return (
    <View style={styles.wandersettings1}>
      <StatusBar />
      <View style={styles.topPanelText}>
        <Text style={styles.wander}>WANDER</Text>
      </View>
      <View style={styles.wanderImageContainer}>
        <Image
          style={styles.wanderIcon}
          resizeMode="contain"
          source={require("../assets/wander.png")}
        />
      </View>
      <Text style={[styles.minTypo]}>
        Set walk time:
      </Text>
      <View style={[styles.minMax, styles.clockFlexBox1]}>
        <Text style={[styles.min, styles.minTypo]}>Min</Text>
        <Picker
          style={styles.picker}
          selectedValue={minValue}
          onValueChange={(itemValue) => setMinValue(itemValue)}
        >
          {[...Array(60)].map((_, i) => (
            <Picker.Item
              key={i}
              label={(i + 1).toString().padStart(2, "0")}
              value={i + 1}
            />
          ))}
        </Picker>
        <Text style={[styles.min, styles.ml7, styles.minTypo]}>
          Max
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={maxValue}
          onValueChange={(itemValue) => setMaxValue(itemValue)}
        >
          {[...Array(60)].map((_, i) => (
            <Picker.Item
              key={i}
              label={(i + 1).toString().padStart(2, "0")}
              value={i + 1}
            />
          ))}
        </Picker>
      </View>
      <Pressable onPress={() => navigation.navigate("WanderSettings2")}>
        <Text
          style={[styles.minTypo ]}> continue
          </Text>
        </Pressable>
      </View>
    );
  };

  const styles = StyleSheet.create({
   ml7: {
    marginLeft: 7,
  },
  clockFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  clockFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  minTypo: {
    fontSize: 30,
    fontFamily: "Raleway",
    textAlign: "center",
    color: "#fff",
  },
  panelBg: {
    backgroundColor: "#214176",
    alignSelf: "stretch",
  },
  wander: {
    fontSize: 34,
    fontFamily: "Sifonn",
    display: "flex",
    textAlign: "center",
    color: "#fff",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  topPanelText: {
    alignSelf: "stretch",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    flexDirection: "row",
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wanderIcon: {
    maxWidth: "100%",
    height: 120,
    width: "100%",
  },
  wanderImageContainer: {
    alignSelf: "stretch",
  },
  min: {
    width: 68,
    height: 33,
  },
  minMax: {
    flexDirection: "row",
  },
  wandersettings1: {
    height: '100%',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#214176",
  },
    picker: {
      width: 90,
      height: 40,
      paddingBottom: 220,
      
    },
  });

  export default WanderSettings1;