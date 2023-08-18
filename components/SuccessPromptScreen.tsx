import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../theme";
import { DefaultButton } from "./Buttons";
import { StackNavigationProps } from "../types";
import Lottie from "lottie-react-native";

const SuccessPromptScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const data = route.params.onSuccessItem;
  //   console.log(data.title);

  return (
    <View style={styles.container}>
      <View>
        <Lottie
          style={{ width: 100, height: 100, marginTop: -50 }}
          source={require("../assets/animations/success.json")}
          autoPlay
          loop
        />
      </View>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.description}</Text>

      <View style={styles.btn}>
        <DefaultButton
          title="Okay"
          onPress={() => navigation.navigate(data.nextScreen)}
        />
      </View>
    </View>
  );
};

export default SuccessPromptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    bottom: 55,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.lg,
    fontWeight: "bold",
    marginVertical: SIZES.sm,
  },
  desc: {
    color: COLORS.darkGray,
    fontSize: SIZES.sm,
    marginVertical: SIZES.xxs,
  },
});
