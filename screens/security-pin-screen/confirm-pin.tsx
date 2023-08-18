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
  title: "PIN Set Successfully!",
  description: "Your security pin has been set successfully.",
  nextScreen: "dashboard",
};

const SecurityPinScreenConfirm = () => {
  const navigation = useNavigation<StackNavigation>();
  // LOCAL STATE
  const [code, setCode] = useState("");

  const onChangeText = useCallback((text: any) => {
    setCode(text);
  }, []);

  const onSubmit = useCallback((codeValue: any) => {
    navigation.navigate("successPrompt", { onSuccessItem });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text]}>Input your six digit PIN again</Text>
      </View>

      {/* ------------- */}
      <View style={styles.codeInputContainer}>
        <View style={{ marginVertical: SIZES.xl }}>
          <AnimatedCodeInput
            value={code}
            numberOfInputs={6}
            onChangeText={onChangeText}
            onSubmitCode={onSubmit}
            autoFocus={false}
            textColor={COLORS.secondary}
            activeCodeContainerStyle={{}}
            codeContainerStyle={{
              backgroundColor: "#F2F8FF",
              customStyle: { marginHorizontal: 5 },
            }}
          />
        </View>
      </View>
      {/* --------- */}
    </View>
  );
};

export default SecurityPinScreenConfirm;

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
