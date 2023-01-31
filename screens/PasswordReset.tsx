import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Text,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const PasswordReset = () => {
  const navigation = useNavigation();
  const [emailContainerTextInput, setEmailContainerTextInput] = useState();

  return (
    <View style={styles.passwordResetView}>
      <View style={styles.statusBarView} />
      <View style={[styles.containerView, styles.mt10]}>
        <View style={styles.logoTextContainerView}>
          <View style={styles.backLogoView}>
            <Pressable
              style={styles.backButtonPressable}
              onPress={() => navigation.goBack()}
            >
              <Pressable
                style={styles.chevronStrokePressable}
                onPress={() => navigation.navigate("LoginOptionsPage")}
              >
                <Image
                  style={styles.icon}
                  resizeMode="cover"
                  source={require("../assets/chevron-stroke3.png")}
                />
              </Pressable>
            </Pressable>
            <View style={styles.logoContainerView}>
              <ImageBackground
                style={styles.oVHLOGOArtboard12x1}
                resizeMode="cover"
                source={require("../assets/ovhlogoartboard12x11.png")}
              />
            </View>
          </View>
          <Text style={[styles.oVERHEARText, styles.mt28]}>OVERHEAR</Text>
          <Text style={[styles.resetPasswordText, styles.mt28]}>
            Reset password
          </Text>
        </View>
        <View style={[styles.formContainerView, styles.mt34]}>
          <RNKTextInput
            style={styles.emailContainerRNKTextInput}
            placeholder="Enter your email"
            value={emailContainerTextInput}
            onChangeText={setEmailContainerTextInput}
            accessoryLeft={<RNKIcon name="mail" pack="material" />}
            placeholderTextColor="#001d46"
            textStyle={styles.emailContainerTextInputText}
          />
          <Pressable style={[styles.logInActionresetPassword, styles.mt28]}>
            <Text style={styles.getPasswordResetEmail}>
              Get password reset email
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28: {
    marginTop: 28,
  },
  emailContainerTextInputText: {
    color: "#001d46",
  },
  mt34: {
    marginTop: 34,
  },
  mt10: {
    marginTop: 10,
  },
  statusBarView: {
    alignSelf: "stretch",
    backgroundColor: "#214176",
    height: statusBarHeight,
    flexShrink: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    width: "100%",
    height: "100%",
    flexShrink: 0,
  },
  chevronStrokePressable: {
    position: "relative",
    width: 9.01,
    height: 18,
  },
  backButtonPressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  oVHLOGOArtboard12x1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  logoContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  backLogoView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  oVERHEARText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 35,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  resetPasswordText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 50,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  logoTextContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emailContainerRNKTextInput: {
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#bcc6d6",
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 17,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  getPasswordResetEmail: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#001d46",
    textAlign: "center",
  },
  logInActionresetPassword: {
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 46,
    paddingVertical: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  formContainerView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  passwordResetView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: 714,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 119,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default PasswordReset;
