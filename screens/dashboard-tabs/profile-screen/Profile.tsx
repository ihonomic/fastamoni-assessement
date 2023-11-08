import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../theme";
import { DefaultButton } from "../../../components/Buttons";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/userSlice";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../types";

const Profile = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useDispatch();

  const logoutFunc = () => {
    dispatch(logout());
    navigation.navigate("login");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Profile</Text>
        <DefaultButton onPress={logoutFunc} title="Logout" />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
});
