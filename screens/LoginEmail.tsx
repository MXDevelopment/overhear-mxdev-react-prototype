import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Text,
  Alert,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { auth } from "../firebase";	
import { useState, useEffect, } from "react";	
import { signInWithEmailAndPassword } from "firebase/auth";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const LoginEmail =() => {	
  const [isSignedIn,setIsSignedIn] = useState(false);	
  const [emailContainerRNKTextInput,setEmail] = useState('');	
  const [passwordContainerRNKTextInput,setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {	
    const unsubscribe = auth.onAuthStateChanged(user => {	
      if (user) {	
        navigation.replace("MapDisplay")	
      }	
    })	
    return unsubscribe	
  }, [])	
  const signInUser = () => {	
    signInWithEmailAndPassword	
    (auth,emailContainerRNKTextInput,passwordContainerRNKTextInput)	
    .then((re)=>{	
      console.log(re);	
      setIsSignedIn	
    })	
    .catch((error) => {
        // If the email is not registered, navigate to the RegisterEmail screen
        // and pass the email to the screen as a parameter
        if (error.code === "auth/user-not-found") {
          navigation.navigate("RegisterEmail", { email: emailContainerRNKTextInput });
        } else {
           // Display an alert pop-up if the password is incorrect
      Alert.alert("Incorrect password", "Please try again.", [
        { text: "OK" },
      ]);
    }
      });
  };


  return (
    <View style={styles.loginEmailView}>
      <View style={styles.statusBarView} />
      <View style={styles.containerView}>
        <View style={styles.logoTextView}>
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
                source={require("../assets/ovhlogoartboard12x13.png")}
              />
            </View>
          </View>
          <View style={[styles.overhearTextContainer, styles.mt23]}>
            <Text style={styles.oVERHEARText}>OVERHEAR</Text>
          </View>
          <View style={[styles.welcomeBackTextContainer, styles.mt23]}>
            <Text style={styles.welcomeBackText}>Welcome back!</Text>
          </View>
        </View>
        <View style={[styles.formContainerView, styles.mt25]}>	
          <RNKTextInput	
            style={styles.emailContainerRNKTextInput}	
            placeholder="Email"	
            value={emailContainerRNKTextInput}	
            onChangeText={text => setEmail(text)}	
            accessoryLeft={<RNKIcon name="mail" pack="material" />}	
            placeholderTextColor="#001d46"	
            textStyle={styles.emailContainerTextInputText}	
          />	
          <RNKTextInput	
            style={[styles.passwordContainerRNKTextInput,]}	
            placeholder="Password"	
            value={passwordContainerRNKTextInput}	
            onChangeText={text => setPassword (text)}	
            accessoryLeft={<RNKIcon name="lock" pack="material" />}	
            placeholderTextColor="#001d46"	
            secureTextEntry	
            textStyle={styles.passwordContainerTextInputText}	
          />	
            <View	
            style={[styles.forgotPasswordTextContainer]}>	
            <Pressable	
              style={styles.forgotPasswordPressable}	
              onPress={() => navigation.navigate("PasswordReset")}	
            >	
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>	
            </Pressable>	
          </View>	
          <Pressable	
          onPress={ signInUser }	
            style={[styles.logInActionregisterfireba, styles.mt14]}	
          >	
            <Text style={styles.signInText}>Sign In</Text>	
          </Pressable>
          <Pressable
            style={[styles.registerContainerPressable, styles.mt14]}
            onPress={() => navigation.navigate("RegisterEmail")}
          >
            <Text style={styles.firstTimeHere}>First time here?</Text>
            <Text style={[styles.registerText, styles.ml9]}>Register</Text>
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
  emailContainerTextInputText: {
    color: "#001d46",
  },
  passwordContainerTextInputText: {
    color: "#001d46",
  },
  ml9: {
    marginLeft: 9,
  },
  mt14: {
    marginTop: 14,
  },
  mt25: {
    marginTop: 25,
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
    width: 9,
    height: 18,
  },
  backButtonPressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  oVHLOGOArtboard12x1: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
  },
  logoContainerView: {
    width: 322,
    height: 217,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backLogoView: {
    flex: 1,
    width: 320,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  oVERHEARText: {
    position: "relative",
    fontSize: 35,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
  },
  overhearTextContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeBackText: {
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  welcomeBackTextContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoTextView: {
    height: 323,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  emailContainerRNKTextInput: {
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#bcc6d6",
    flexDirection: "row",
    paddingVertical: 17,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
    
  },
  forgotPasswordPressable: {
    position: "relative",
  },
  forgotPasswordTextContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  passwordContainerRNKTextInput: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  signInText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#001d46",
    textAlign: "center",
  },
  logInActionregisterfireba: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 50,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  firstTimeHere: {
    alignSelf: "stretch",
    flex: 1,
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
  },
  registerText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
  },
  registerContainerPressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  loginEmailView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: '100%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default LoginEmail;
