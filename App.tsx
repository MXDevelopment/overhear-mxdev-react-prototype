const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Tutorial1 from "./screens/Tutorial1";
import MapDisplay from "./screens/MapDisplay";
import TopPannelFilter from "./screens/TopPannelFilter";
import More from "./screens/More";
import WanderSettings2 from "./screens/WanderSettings2";
import WanderSettings1 from "./screens/WanderSettings1";
import Library from "./screens/Library";
import Tutorial5 from "./screens/Tutorial5";
import Tutorial4 from "./screens/Tutorial4";
import Tutorial3 from "./screens/Tutorial3";
import Tutorial2 from "./screens/Tutorial2";
import PasswordReset from "./screens/PasswordReset";
import RegisterEmail from "./screens/RegisterEmail";
import LoginEmail from "./screens/LoginEmail";
import LoginOptionsPage from "./screens/LoginOptionsPage";
import TopPannelTags from "./screens/TopPannelTags";
import Where from "./screens/Where";
import QRPin from "./screens/QRPin";
import GenreItemsContainer from "./screens/GenreItemsContainer";
import CollectPlay from "./screens/CollectPlay";
import ListItemCleared from "./screens/ListItemCleared";
import ListItemExpand from "./screens/ListItemExpand";
import ListItemDelete from "./screens/ListItemDelete";
import Wander5Icon from "./screens/Wander5Icon";
import Wander4Icon from "./screens/Wander4Icon";
import Wander3Icon from "./screens/Wander3Icon";
import Wander2Icon from "./screens/Wander2Icon";
import Wander1Icon from "./screens/Wander1Icon";
import MapButton2 from "./components/MapButton2";
import MapButton3 from "./components/MapButton3";
import LibraryButton2 from "./components/LibraryButton2";
import WanderButton2 from "./components/WanderButton2";
import WanderButton3 from "./components/WanderButton3";
import MoreButton2 from "./components/MoreButton2";
import MoreButton3 from "./components/MoreButton3";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <MapButton3 />,
    <LibraryButton2 />,
    <WanderButton3 />,
    <MoreButton3 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <MapButton2 />,
    <LibraryButton2 />,
    <WanderButton2 />,
    <MoreButton2 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: "#214176",
              height: 106,
              flexShrink: 0,
              flexDirection: "row",
              paddingHorizontal: 35,
              paddingVertical: 0,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "space-between",
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="MapDisplay"
        component={MapDisplay}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="WanderSettings1"
        component={WanderSettings1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  useFonts({
    Sifonn: require("./assets/fonts/SIFONN_BASIC_OUTLINE.otf"),
    Raleway: require("./assets/fonts/Raleway.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Nunito: require("./assets/fonts/Nunito.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Manrope: require("./assets/fonts/Manrope.ttf"),
    SFProDisplay_medium: require("./assets/fonts/SF_Pro_Display_medium.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Work_Sans: require("./assets/fonts/Work_Sans.ttf"),
    
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="Tutorial1"
                component={Tutorial1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TopPannelFilter"
                component={TopPannelFilter}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WanderSettings2"
                component={WanderSettings2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tutorial5"
                component={Tutorial5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tutorial4"
                component={Tutorial4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tutorial3"
                component={Tutorial3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tutorial2"
                component={Tutorial2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PasswordReset"
                component={PasswordReset}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterEmail"
                component={RegisterEmail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginEmail"
                component={LoginEmail}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginOptionsPage"
                component={LoginOptionsPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TopPannelTags"
                component={TopPannelTags}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Where"
                component={Where}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="QRPin"
                component={QRPin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GenreItemsContainer"
                component={GenreItemsContainer}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CollectPlay"
                component={CollectPlay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListItemCleared"
                component={ListItemCleared}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListItemExpand"
                component={ListItemExpand}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListItemDelete"
                component={ListItemDelete}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Wander5"
                component={Wander5Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Wander4"
                component={Wander4Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Wander3"
                component={Wander3Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Wander2"
                component={Wander2Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Wander1"
                component={Wander1Icon}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
