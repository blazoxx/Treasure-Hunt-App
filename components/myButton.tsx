import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface MyButtonProps {
  title: string;
  onPress: () => void;
}

const MyButton = ({ title, onPress }: MyButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
