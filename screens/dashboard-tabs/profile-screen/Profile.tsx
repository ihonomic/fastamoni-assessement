import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../../theme";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text>Profile</Text>
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
