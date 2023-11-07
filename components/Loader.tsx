import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <React.Fragment>
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </React.Fragment>
  );
};

export default Loader;

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF88",
    zIndex: 5,
  },
});
