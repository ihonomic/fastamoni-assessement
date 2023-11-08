import { Text, StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
// IMPORT SCREENS
import {
  OnBoardingScreen,
  DashBoardTabs,
  WelcomeScreen,
  SecurityPinScreen,
  SignUpScreen,
  VerifyPhoneScreen,
  LoginScreen,
} from "../screens";
import { COLORS } from "../theme";
import { GoBackIcon } from "../assets/svgs/icons";
import { TouchableOpacity } from "react-native";
import { StackParamList } from "../types";
import SuccessPromptScreen from "../components/SuccessPromptScreen";
import SecurityPinScreenConfirm from "../screens/security-pin-screen/confirm-pin";

const Stack = createStackNavigator<StackParamList>();

const index = () => {
  return (
    <Stack.Navigator
      initialRouteName="onboarding"
      screenOptions={{
        // headerTitleStyle: { ...customHeaderTitleStyle },
        headerBackTitle: " ",
        headerTintColor: COLORS.primary, // COLOR OF THE ALL HEADER TEXT
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerLeft: (props) => (
          <>
            <TouchableOpacity style={styles.backIcon} {...props}>
              <GoBackIcon />
            </TouchableOpacity>
          </>
        ),
      }}
    >
      <Stack.Screen
        name="onboarding"
        component={OnBoardingScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{
          title: "Sign up as a member",
        }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: "Sign into your account",
        }}
      />
      <Stack.Screen
        name="securityPin"
        component={SecurityPinScreen}
        options={{
          title: "Set Your Security PIN",
        }}
      />
      <Stack.Screen
        name="securityPinConfirm"
        component={SecurityPinScreenConfirm}
        options={{
          title: "Confirm PIN",
        }}
      />
      <Stack.Screen
        name="verifyPhone"
        component={VerifyPhoneScreen}
        options={{
          title: "Verify Phone Number",
        }}
      />
      <Stack.Screen
        name="dashboard"
        component={DashBoardTabs}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="successPrompt"
        component={SuccessPromptScreen}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default index;

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 15,
    width: 55,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
