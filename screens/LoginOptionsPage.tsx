import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";

const LoginOptionsPagelogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginOptionsPagelogin}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.logotext}>
          <View style={styles.logoContainer}>
            <ImageBackground
              style={styles.ovhLogoartboard12x1}
              resizeMode="contain"
              source={require("../assets/ovhlogoartboard12x14.png")}
            />
          </View>
          <View
            style={[
              styles.overhearTextContainer,
              styles.mt23,
              styles.skipContainerFlexBox,
            ]}
          >
            <Text style={styles.overhear}>OVERHEAR</Text>
          </View>
        </View>
        <Text style={styles.signIn}>Sign in</Text>
        <Text
          style={[styles.chooseAnOptionBelow, styles.signInWithEmail1Typo]}
        >{`Choose an option below `}</Text>
        <View style={styles.logins}>
          <Pressable
            style={styles.signInWithEmail}
            onPress={() => navigation.navigate("LoginEmail")}
          >
            <Image
              style={styles.mailIcon}
              resizeMode="cover"
              source={require("../assets/mail.png")}
            />
            <Text
              style={[
                styles.signInWithEmail1,
                styles.ml10,
                styles.signInWithEmail1Typo,
              ]}
            >
              Sign in with email
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.appleActionloginfirebaseA,
              styles.mt18,
              styles.actionloginfirebaseShadowBox,
            ]}
          >
            <Image
              style={[styles.appleLogoIcon, styles.logoIconLayout]}
              resizeMode="cover"
              source={require("../assets/apple-logo.png")}
            />
            <Text
              style={[styles.signInWithApple, styles.ml15, styles.signTypo]}
            >
              Sign In with Apple
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.googleActionloginfirebase,
              styles.mt18,
              styles.actionloginfirebaseShadowBox,
            ]}
          >
            <Image
              style={styles.logoIconLayout}
              resizeMode="cover"
              source={require("../assets/google-logo.png")}
            />
            <Text
              style={[styles.signInWithGoogle, styles.ml15, styles.signTypo]}
            >
              Sign In with Google
            </Text>
          </Pressable>
        </View>
        <View style={[styles.skipContainer, styles.skipContainerFlexBox]}>
          <Pressable onPress={() => navigation.navigate("MapDisplay")}>
            <Text
              style={[
                styles.skip1,
                styles.signTypo,
                styles.skipContainerFlexBox,
              ]}
            >
              Skip
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt23: {
    marginTop: 23,
  },
  ml10: {
    marginLeft: 10,
  },
  ml15: {
    marginLeft: 15,
  },
  mt18: {
    marginTop: 18,
  },
  skipContainerFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  signInWithEmail1Typo: {
    fontWeight: "500",
    fontFamily: "Manrope",
  },
  actionloginfirebaseShadowBox: {
    paddingVertical: 13,
    height: 50,
    width: 343,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 10,
    flexDirection: "row",
  },
  logoIconLayout: {
    height: 24,
    width: 24,
  },
  signTypo: {
    fontSize: 20,
    fontWeight: "500",
  },
  ovhLogoartboard12x1: {
    alignSelf: "stretch",
    flex: 1,
  },
  logoContainer: {
    height: 265,
    paddingVertical: 11,
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  overhear: {
    fontSize: 35,
    fontFamily: "Sifonn",
    textAlign: "center",
    color: "#fff",
  },
  overhearTextContainer: {
    flexDirection: "row",
  },
  logotext: {
    alignSelf: "stretch",
  },
  signIn: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "Manrope",
    textAlign: "center",
    color: "#fff",
    alignSelf: "stretch",
  },
  chooseAnOptionBelow: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    alignSelf: "stretch",
  },
  mailIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  signInWithEmail1: {
    fontSize: 16,
    color: "#000",
    textAlign: "left",
  },
  signInWithEmail: {
    borderRadius: 7,
    paddingHorizontal: 89,
    paddingVertical: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  appleLogoIcon: {
    overflow: "hidden",
  },
  signInWithApple: {
    fontFamily: "SF Pro Display",
    width: 175,
    textAlign: "left",
    color: "#fff",
  },
  appleActionloginfirebaseA: {
    backgroundColor: "#000",
    paddingHorizontal: 57,
  },
  signInWithGoogle: {
    fontFamily: "Roboto",
    color: "rgba(0, 0, 0, 0.54)",
    width: 190,
    textAlign: "left",
  },
  googleActionloginfirebase: {
    paddingHorizontal: 49,
    backgroundColor: "#fff",
  },
  logins: {
    width: 364,
    alignItems: "center",
  },
  skip1: {
    fontFamily: "Poppins",
    color: "#c4c4c4",
    display: "flex",
    textAlign: "center",
    flex: 1,
  },
  skipContainer: {
    height: 32,
    paddingVertical: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  container: {
    paddingTop: 16,
    paddingBottom: 29,
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  loginOptionsPagelogin: {
    width: "100%",
    height: 715,
    alignItems: "center",
    flex: 1,
    backgroundColor: "#214176",
  },
});

export default LoginOptionsPagelogin;
