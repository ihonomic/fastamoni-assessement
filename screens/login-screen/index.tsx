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
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/userSlice";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  // GLOBAL STATE
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    userInfo: { id, email },
  } = useSelector(userSelector);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>We love to see you join us</Text>
      </View>

      {/* --------- */}

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: "red" }]}
          placeholder="Enter full name"
          placeholderTextColor={"#9F56D4"}
          right={<TextInput.Icon icon={() => <GiftIcon />} />}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: "red" }]}
          placeholder="Enter Job Title"
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
        <Text
          onPress={() => navigation.navigate("signup")}
          style={{ textAlign: "center", color: COLORS.darkGray }}
        >
          Not registered?{" "}
          <Text style={{ color: COLORS.secondary }}>Signup here</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

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
  inputContainer: {
    width: "90%",
    marginHorizontal: SIZES.md,
    marginTop: SIZES.lg,
  },
});
