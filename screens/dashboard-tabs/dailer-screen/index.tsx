import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { COLORS, SIZES } from "../../../theme";
import { StatusBar } from "expo-status-bar";
import { BarcodeIcon, ClockIcon } from "../../../assets/svgs/icons";
import NumberPad from "./NumberPad";
import DialerButton from "./DialerButton";

const Dailer = () => {
  const [typed, setTyped] = useState([]);

  const getInputtedAmount = () => {
    if (typed.length < 1) {
      return "0";
    }
    return typed.join("");
  };

  useEffect(() => {
    getInputtedAmount();
  }, [typed, setTyped]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        {/* TOP BAR  */}
        <View style={styles.topBar}>
          <TouchableOpacity activeOpacity={0.5}>
            <BarcodeIcon />
          </TouchableOpacity>
          <View style={styles.totalBoard}>
            <Text style={[styles.text, { textAlign: "center", opacity: 0.6 }]}>
              Wallet Balance
            </Text>
            <Text style={[styles.text, { textAlign: "center" }]}>₦5,200</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <ClockIcon />
          </TouchableOpacity>
        </View>

        {/* DAILER  */}
        <View style={styles.dailerText}>
          <Text style={[styles.text, { fontSize: 30 }]}>₦</Text>
          <Text style={[styles.text, { fontSize: 50 }]} numberOfLines={1}>
            {getInputtedAmount()}
          </Text>
        </View>

        {/* NUMBER PAD  */}
        <View style={styles.numPad}>
          <NumberPad setTyped={setTyped} />
        </View>

        {/* ACTION BUTTON  */}
        <View style={styles.btns}>
          <DialerButton title={"Request"} />
          <DialerButton title={"Send"} />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dailer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  topBar: {
    margin: SIZES.md,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalBoard: {
    height: 63,
    width: 135,
    backgroundColor: "#1b1337",
    borderRadius: SIZES.xs,
    justifyContent: "center",
  },
  text: {
    color: COLORS.white,
  },
  dailerText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginBottom: 50,
    gap: 5,
  },
  numPad: { alignItems: "center" },
  btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: SIZES.xl,
    gap: 5,
  },
});
