import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../../theme";
import { SquareMeLogoWhiteWelcome } from "../../assets/svgs/logo";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types";

const WelcomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.centralized}>
          {/* <SquareMeLogoWhiteWelcome /> */}
          <Text style={{ color: COLORS.white, fontSize: 19 }}>
            FASTAMONI Technologies
          </Text>
        </View>
        <View style={styles.centralized_bottom}>
          <PrimaryButton
            title="Create an account"
            onPress={() => navigation.navigate("signup")}
          />
          <SecondaryButton
            title="I have an account"
            onPress={() => navigation.navigate("login")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  centralized: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  centralized_bottom: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
