import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
  Text,
  Dimensions
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Input as RNKTextInput, Icon as RNKIcon } from "@ui-kitten/components";
import { createUserWithEmailAndPassword } from "firebase/auth";	
import { auth } from "../firebase";
const { height } = Dimensions.get('window');
const statusBarHeight = height * 0.04;

const RegisterEmail = () => {
  const [isSignedIn,setIsSignedIn] = useState(false);

  const [emailContainerTextInput, setEmailContainerTextInput] = useState("");
  const [passwordContainerTextInput, setPasswordContainerTextInput] = useState("");
  const [passwordContainerTextInputConfirm, setPasswordContainerTextInputConfirm,] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  const [showEmailNotRegisteredMessage, setShowEmailNotRegisteredMessage] = useState(false);
  // Get the email that was passed from the LoginEmail screen
  const email = route.params?.email;

  // Set the email in the input field if it was passed from the LoginEmail screen
  useEffect(() => {
    if (email) {
      setEmailContainerTextInput(email);
    }
  }, []);
  

  const RegisterUser = () => {	
    // Check if passwords match
    if (passwordContainerTextInput !== passwordContainerTextInputConfirm) {
      alert("Passwords do not match!");
      return;
    }
    createUserWithEmailAndPassword	
    (auth,emailContainerTextInput,passwordContainerTextInput)	
    .then((re)=>{	
      console.log(re);	
      setIsSignedIn	
    })	
    .catch((error) => {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setShowEmailNotRegisteredMessage(true);
      }
    });
};


  return (
    <View style={styles.registerEmailView}>
      <View style={styles.statusBarView} />
      <View style={styles.containerView}>
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
                source={require("../assets/ovhlogoartboard12x12.png")}
              />
            </View>
          </View>
          <Text style={[styles.oVERHEARText, styles.mt3]}>OVERHEAR</Text>
          <Text style={[styles.registerText, styles.mt3]}>Register</Text>
          <Text style={[styles.welcomeText, styles.mt3]}>Welcome!</Text>
        </View>
        
        <View style={[styles.formContainerView, styles.mt12]}>	
          <RNKTextInput	
            style={styles.emailContainerRNKTextInput}	
            placeholder="Enter your email"	
            value={emailContainerTextInput}	
            onChangeText={text => setEmailContainerTextInput(text)}	
            accessoryLeft={<RNKIcon name="mail" pack="material" />}	
            placeholderTextColor="#001d46"	
            textStyle={styles.emailContainerTextInputText}	
          />	
          <RNKTextInput	
            style={[styles.passwordContainerRNKTextInput, styles.mt17]}	
            placeholder="Enter your password"	
            value={passwordContainerTextInput}	
            onChangeText={text => setPasswordContainerTextInput(text)}	
            accessoryLeft={<RNKIcon name="lock" pack="material" />}	
            placeholderTextColor="#001d46"	
            secureTextEntry	
            textStyle={styles.passwordContainerTextInputText}	
          />	
           {/*password confirmation field */}
           <RNKTextInput
            style={[styles.passwordContainerRNKTextInput, styles.mt17]}
            placeholder="Re-enter your password"
            value={passwordContainerTextInputConfirm}
            onChangeText={(text) =>
              setPasswordContainerTextInputConfirm(text)
            }
            accessoryLeft={<RNKIcon name="lock" pack="material" />}
            placeholderTextColor="#001d46"
            secureTextEntry
            textStyle={styles.passwordContainerTextInputText}
          />
          {showEmailNotRegisteredMessage ? (
            <Text style={styles.emailNotRegisteredMessage}>
              This email is already registered. Please try a different email or
              login with this email.
            </Text>
          ) : null}
          <Pressable 	
            onPress={RegisterUser}	
            style={[styles.registerContainerPressable, styles.mt17]}>	
            <View style={styles.logInActionregisterfireba}>	
              <Text style={styles.registerText1}>Register</Text>	
            </View>	
          </Pressable>
          <Pressable
            style={[styles.haveAnAccount1, styles.mt17]}
            onPress={() => navigation.navigate("LoginEmail")}>

              <Text style={styles.haveAnAccount}>Have an account?</Text>
              <Text style={styles.signInText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailNotRegisteredMessage: {
    color: "red",
    fontSize: 16,
    marginTop: 16,
  },
  mt3: {
    marginTop: 3,
  },
  emailContainerTextInputText: {
    color: "#001d46",
  },
  passwordContainerTextInputText: {
    color: "#001d46",
  },
  mt17: {
    marginTop: 17,
  },
  mt12: {
    marginTop: 12,
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
    paddingHorizontal: 0,
    paddingVertical: 11,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backLogoView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  oVERHEARText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 35,
    fontFamily: "Sifonn",
    color: "#fff",
    textAlign: "center",
    height: 46,
  },
  registerText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 50,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "center",
  },
  welcomeText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "500",
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
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  passwordContainerRNKTextInput: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  registerText1: {
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#001d46",
    textAlign: "center",
  },
  logInActionregisterfireba: {
    alignSelf: "stretch",
    height: 50,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainerPressable: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 50,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 21,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  haveAnAccount: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "right",
    width: 232.06,
    height: 99,
  },
  signInText: {
    position: "absolute",
    top: 0,
    left: 242.53,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Manrope",
    color: "#fff",
    textAlign: "left",
    width: 92.47,
    height: 99,
  },
  haveAnAccount1: {
    alignSelf: "stretch",
    height: 10,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  registerEmailView: {
    position: "relative",
    backgroundColor: "#214176",
    flex: 1,
    width: "100%",
    height: 715,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default RegisterEmail;
