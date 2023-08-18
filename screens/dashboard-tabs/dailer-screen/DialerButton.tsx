import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../../theme";

const DialerButton = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      <Text style={{ color: COLORS.white, opacity: 0.6 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DialerButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#28283a",
    width: 123,
    height: 47,
    borderRadius: SIZES.sm,
    justifyContent: "center",
    alignItems: "center",
  },
});
