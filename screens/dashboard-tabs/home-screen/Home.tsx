import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES } from "../../../theme";
import { Avatar } from "react-native-paper";
import {
  BarcodeHomeIcon,
  BellIcon,
  CardIcon,
  EmptyTransactionIcon,
  GiftCardIcon,
  PayBillsIcon,
} from "../../../assets/svgs/icons";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="dark" /> */}
      <ImageBackground
        source={require("../../../assets/images/homeGrdaient.png")}
        resizeMode="cover"
        style={{ width: "100%", height: 316 }}
      >
        <SafeAreaView>
          {/* TOP BAR  */}
          <View style={styles.topBar}>
            <View style={styles.avatarContainer}>
              <Avatar.Image
                size={30}
                source={require("../../../assets/images/avatarMan.png")}
              />
              <View style={{ marginLeft: SIZES.xxs }}>
                <Text style={{ color: COLORS.darkGray }}>Hello,</Text>
                <Text>David Oloye</Text>
              </View>
            </View>

            <View style={styles.notificationContainer}>
              <TouchableOpacity>
                <BarcodeHomeIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <BellIcon />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View style={{ marginHorizontal: SIZES.md }}>
        {/* QUICK ACCESS  */}
        <View>
          <Text style={styles.quickAssessText}>Quick Access</Text>
          <View style={styles.quickAccessIcons}>
            <View style={styles.actionBtn}>
              <TouchableOpacity>
                <PayBillsIcon />
              </TouchableOpacity>
              <Text style={styles.actionText}>PayBill</Text>
            </View>
            <View style={styles.actionBtn}>
              <TouchableOpacity>
                <GiftCardIcon />
              </TouchableOpacity>
              <Text style={styles.actionText}>Giftcards</Text>
            </View>
            <View style={styles.actionBtn}>
              <TouchableOpacity>
                <CardIcon />
              </TouchableOpacity>
              <Text style={styles.actionText}>Cards</Text>
            </View>
          </View>
        </View>
        {/* RECENT TRANSACTIONS  */}
        <View style={{ marginTop: SIZES.md }}>
          <Text style={styles.quickAssessText}>Recent Transaction</Text>

          <View style={styles.innerRecentTrans}>
            <EmptyTransactionIcon />

            <Text style={styles.noRecentHeader}>No recent transaction</Text>
            <Text
              style={{
                textAlign: "center",
                paddingHorizontal: SIZES.md,
                color: COLORS.darkGray,
              }}
            >
              You have not performed any transaction, you can start sending and
              requesting money from your contacts.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topBar: {
    margin: SIZES.md,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  quickAssessText: {
    fontSize: SIZES.lg,
    color: "#4F4F4F",
    fontWeight: "bold",
  },
  quickAccessIcons: {
    flexDirection: "row",
    gap: 40,
    marginVertical: SIZES.md,
  },
  innerRecentTrans: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.xl,
  },
  noRecentHeader: {
    fontSize: SIZES.md,
    color: "#4F4F4F",
    fontWeight: "bold",
    marginVertical: SIZES.md,
  },
  actionText: {
    marginTop: SIZES.xxs,
    color: "#4F4F4F",
    fontSize: SIZES.sm,
  },
  actionBtn: { justifyContent: "center", alignItems: "center" },
});
