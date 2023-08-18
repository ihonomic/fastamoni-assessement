import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../theme";

export const DefaultButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: COLORS.primary }]}
    >
      <Text style={{ fontWeight: "500", color: COLORS.white }}>{title}</Text>
    </TouchableOpacity>
  );
};
export const SmallPrimaryButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: COLORS.primary, width: 150 }]}
    >
      <Text style={{ fontWeight: "500", color: COLORS.white }}>{title}</Text>
    </TouchableOpacity>
  );
};
export const PrimaryButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: COLORS.white }]}
    >
      <Text style={{ fontWeight: "500" }}>{title}</Text>
    </TouchableOpacity>
  );
};
export const SmallSecondaryButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: "transparent",
          width: 150,
          borderColor: COLORS.primary,
        },
      ]}
    >
      <Text style={{ fontWeight: "500", color: COLORS.primary }}>{title}</Text>
    </TouchableOpacity>
  );
};
export const SecondaryButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: "transparent" }]}
    >
      <Text style={{ fontWeight: "500", color: COLORS.white }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 312,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    marginVertical: SIZES.xxs,
    borderRadius: SIZES.xs,
  },
});
