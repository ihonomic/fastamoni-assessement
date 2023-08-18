import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";
import React from "react";
import { COLORS, SIZES } from "../../theme";
import { DefaultButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types";
import { GiftIcon } from "../../assets/svgs/icons";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";

const SignUpScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          We’ll send an SMS with a code to verify your phone number
        </Text>
      </View>

      {/* --------- */}
      <View style={{ marginTop: SIZES.md }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "30%" }}>
            <Dropdown
              style={styles.inputs}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={countriesList}
              maxHeight={150}
              labelField="label"
              valueField="value"
              placeholder={"+234"}
              searchPlaceholder="Search..."
              // value={value}
              onChange={(item) => {}}
              renderLeftIcon={() => (
                <Image
                  source={require("../../assets/images/nigeriaFlag.png")}
                  style={{ width: 20, height: 20 }}
                />
              )}
            />
          </View>
          <View style={{ width: "65%" }}>
            <TextInput style={styles.input} placeholder="Phone Number" />
          </View>
        </View>
      </View>

      <View
        style={{
          width: "90%",
          marginHorizontal: SIZES.md,
          marginTop: SIZES.lg,
        }}
      >
        <TextInput
          style={[styles.input, { color: "red" }]}
          placeholder="Have a referral ID?"
          placeholderTextColor={"#9F56D4"}
          right={<TextInput.Icon icon={() => <GiftIcon />} />}
        />
      </View>

      {/* ------- */}

      <View style={styles.actionBtn}>
        <DefaultButton
          title="Proceed"
          onPress={() => navigation.navigate("verifyPhone")}
        />
        <Text style={{ textAlign: "center", color: COLORS.darkGray }}>
          Already have an account?{" "}
          <Text style={{ color: COLORS.secondary }}>Login here</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
  },
  actionBtn: {
    position: "absolute",
    bottom: 50,
  },
  text: {
    color: COLORS.darkGray,
    fontSize: 18,
    textAlign: "center",
    marginVertical: SIZES.md,
    paddingHorizontal: SIZES.lg,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.black,
    opacity: 0.5,
    marginTop: SIZES.xxs,
    height: SIZES.xl + 25,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xxs,
  },

  // DROP DOWN STYLE
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputs: {
    borderWidth: 1,
    borderColor: COLORS.black,
    opacity: 0.5,
    marginTop: SIZES.xxs,
    height: SIZES.xl + 25,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xxs,
    paddingHorizontal: SIZES.sm,
  },
});

const countriesList = [
  { label: "+234", value: "1" },
  { label: "+233", value: "2" },
  { label: "+211", value: "3" },
];
