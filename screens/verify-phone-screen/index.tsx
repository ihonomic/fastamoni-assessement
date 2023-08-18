import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { COLORS, SIZES } from "../../theme";
import {
  SmallPrimaryButton,
  SmallSecondaryButton,
} from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import AnimatedCodeInput from "@brainsbeards/react-native-animated-code-input";
import { StackNavigation } from "../../types";

const onSuccessItem = {
  title: "Verification successful!",
  description: "Your phone number has been verified successfully.",
  nextScreen: "securityPin",
};

const VerifyPhoneScreen = () => {
  const navigation = useNavigation<StackNavigation>();
  // LOCAL STATE
  const [code, setCode] = useState("");

  const onChangeText = useCallback((text: any) => {
    setCode(text);
  }, []);

  const onSubmit = useCallback((codeValue: any) => {
    alert("Verified");
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Please input the five digit code that was sent to your phone number
          below
        </Text>
      </View>

      {/* ------------- */}
      <View style={styles.codeInputContainer}>
        <View style={{ marginVertical: SIZES.xl }}>
          <AnimatedCodeInput
            value={code}
            numberOfInputs={5}
            onChangeText={onChangeText}
            onSubmitCode={onSubmit}
            autoFocus={true}
            textColor={COLORS.secondary}
            activeCodeContainerStyle={{}}
            codeContainerStyle={{
              backgroundColor: "#F2F8FF",
              customStyle: { marginHorizontal: 5 },
            }}
          />
        </View>
        <Text style={{ color: COLORS.secondary }}>0:00</Text>
      </View>
      {/* --------- */}
      <View>
        <Text style={styles.text}>
          Having trouble receiving SMS?{" "}
          <Text style={{ color: COLORS.secondary }}>Resend</Text> Or try other
          options below
        </Text>
      </View>

      <View style={styles.actionBtn}>
        <SmallSecondaryButton
          title="Call me"
          onPress={() => {
            navigation.navigate("successPrompt", { onSuccessItem });
          }}
        />
        <SmallPrimaryButton
          title="Whatsapp"
          onPress={() => {
            navigation.navigate("successPrompt", { onSuccessItem });
          }}
        />
      </View>
    </View>
  );
};

export default VerifyPhoneScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    alignItems: "center",
  },
  actionBtn: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    gap: 10,
  },
  text: {
    color: COLORS.darkGray,
    fontSize: 18,
    textAlign: "center",
    marginVertical: SIZES.md,
    paddingHorizontal: SIZES.lg,
  },
  codeInputContainer: {
    alignItems: "center",
    marginVertical: SIZES.xl,
  },
});
