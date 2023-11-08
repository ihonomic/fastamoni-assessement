import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState, useEffect } from "react";
import { COLORS, SIZES } from "../../theme";
import { DefaultButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../types";
import { GiftIcon } from "../../assets/svgs/icons";
import { useDispatch, useSelector } from "react-redux";
import { clearState, loginUser, userSelector } from "../../store/userSlice";
import Loader from "../../components/Loader";

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  // GLOBAL STATE
  const dispatch = useDispatch();
  const { isAuthenticated, userInfo, isSuccess, isError, message } =
    useSelector(userSelector);

  // LOCAL STATE
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      navigation.navigate("verifyPhone");
    }

    if (isError) {
      setLoading(false);
      return Alert.alert("Info", message ? message : "No Network connection", [
        {
          text: "OK",
          onPress: () => {
            dispatch(clearState());
          },
        },
      ]);
    }
  }, [isSuccess, isError]);

  const onSubmit = () => {
    if (email.length < 1 || password.length < 1) {
      return Alert.alert("Info", "Email & password is required");
    }
    setLoading(true);
    console.log(formData);
    dispatch(loginUser(formData));
  };

  //  CLEAR REDUX DATA ON EVERY APP REFRESH
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* ADDITIONAL COMPONENT  */}
      <Loader loading={loading} />

      <View>
        <Text style={styles.text}>We love to see you join us</Text>
      </View>

      {/* --------- */}

      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          style={[styles.input, { color: "red" }]}
          placeholder="Email"
          placeholderTextColor={"#9F56D4"}
          right={<TextInput.Icon icon={() => <GiftIcon />} />}
          value={email}
          onChangeText={(text) => {
            setFormData({ ...formData, email: text });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="password"
          secureTextEntry
          style={[styles.input, { color: "red" }]}
          placeholder="Enter Job Title"
          placeholderTextColor={"#9F56D4"}
          right={<TextInput.Icon icon={() => <GiftIcon />} />}
          value={password}
          onChangeText={(text) => {
            setFormData({ ...formData, password: text });
          }}
        />
      </View>

      {/* ------- */}

      <View style={styles.actionBtn}>
        <DefaultButton title="Proceed" onPress={onSubmit} />
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
