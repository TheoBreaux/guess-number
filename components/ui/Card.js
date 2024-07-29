import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 15,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //shadow for Android
    elevation: 4,
    // shadow for iOS
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
