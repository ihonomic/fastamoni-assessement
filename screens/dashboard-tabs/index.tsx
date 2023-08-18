import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../theme";
import { DailerIcon } from "../../assets/svgs/icons";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// TAB SCREENS
import Home from "./home-screen/Home";
import Dailer from "./dailer-screen";
import Profile from "./profile-screen/Profile";

const Tab = createBottomTabNavigator();

const DashBoardTabs = ({ navigation }: { navigation: any }) => {
  const [bgColor, setBgColor] = useState("white");

  const getIconColor = (focused: boolean) => ({
    color: focused ? COLORS.primary : "gray",
  });

  return (
    <Tab.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabBar, { backgroundColor: bgColor }],
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={styles.tabIconContainer}>
              <MaterialIcons
                name="home-filled"
                size={24}
                color={getIconColor(focused).color}
              />
              {/* <HomeIcon color={getIconColor(focused).color} /> */}
            </View>
          ),
        }}
        listeners={{
          tabPress: (e: any) => {
            setBgColor("white");
          },
        }}
      />
      <Tab.Screen
        name="dailer"
        component={Dailer}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={styles.tabIconContainer}>
              <DailerIcon
                color={
                  bgColor === COLORS.primary
                    ? "white"
                    : getIconColor(focused).color
                }
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e: any) => {
            setBgColor(COLORS.primary);
          },
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <View style={styles.tabIconContainer}>
              <FontAwesome
                name="user"
                size={24}
                color={getIconColor(focused).color}
              />
            </View>
          ),
        }}
        listeners={{
          tabPress: (e: any) => {
            setBgColor("white");
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default DashBoardTabs;

const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    // padding: 0,
    // left: 16,
    // right: 16,
    // bottom: 32,
    // height: 56,
    // borderRadius: 16,
    // backgroundColor: getBottomTabColor(),
    borderTopColor: "transparent",
    shadowColor: COLORS.black,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: "absolute",
    top: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});
