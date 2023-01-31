import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, Dimensions } from "react-native";
import { auth } from "../firebase";	
import { useState, useEffect, } from "react";	
import { useNavigation } from "@react-navigation/native";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const More = () => {
  const [isSignedIn,setIsSignedIn] = useState(false);	
  const [userEmail, setUserEmail] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
        setUserEmail(user.email);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, [isSignedIn]);
  return (
    <View style={styles.moreView}>
      <View style={styles.statusBarView} />
      <View style={styles.topPanelText}>
        <Text style={styles.moreText}>...MORE</Text>
      </View>
      <View style={styles.moreButtonsView}>
        <View style={styles.buttonContainerView}>
          <Pressable 
          style={styles.replayTutorialButton}
            onPress={() => navigation.navigate("Tutorial1")}
          >
            <Text style={styles.replayTutorialText}>Replay Tutorial</Text>
          </Pressable>
        </View>
        <View style={[styles.signOutContainer, styles.mt17]}>
      {isSignedIn ? (
        <Pressable style={styles.signOutButton} onPress={() => auth.signOut()}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.signOutButton}
          onPress={() => navigation.navigate("LoginOptionsPage")}
        >
          <Text style={styles.signOutText}>Sign In</Text>
        </Pressable>
      )}
    </View>
      </View>
      <View style={styles.emailContainerView}>
        <Text style={styles.emailemailcomText}>{userEmail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt17: {
    marginTop: 17,
  },
  mt12: {
    marginTop: 12,
  },
  mt9: {
    marginTop: 9,
  },
  mt14: {
    marginTop: 14,
  },
  statusBarView: {
    alignSelf: "stretch",
    backgroundColor: "#214176",
    height: statusBarHeight,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  moreText: {
    flex: 1,
    position: "relative",
    fontSize: 34,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  topPanelText: {
    alignSelf: "stretch",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "#214176",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom: 36,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  replayTutorialText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  replayTutorialButton: {
    alignSelf: "stretch",
    borderRadius: 22,
    backgroundColor: "#29b6f6",
    height: 38,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 37,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 52,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  signOutText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins",
    color: "#fff",
    textAlign: "center",
  },
  signOutButton: {
    alignSelf: "stretch",
    borderRadius: 22,
    backgroundColor: "#29b6f6",
    height: 38,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 37,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signOutContainer: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 52,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  moreButtonsView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 65,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  emailemailcomText: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
    bottom: 120,
  },
  emailContainerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  moreView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default More;
