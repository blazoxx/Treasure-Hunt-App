import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ReactNativeModal from "react-native-modal";

const Home = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.box}>
      <Button onPress={() => setVisible(true)}>Open Modal</Button>
      {/* <Modal visible={visible} animationType="slide" transparent>
        <View style={styles.boxModal}>
          <View style={styles.boxModalInner}>
            <Button onPressIn={() => setVisible(false)}>Close Modal</Button>
          </View>
        </View>
      </Modal> */}
      <ReactNativeModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        // animationIn={"bounceInUp"}
        // animationOut={"tada"}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{
            backgroundColor: "#ccc",
            height: 300,
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Button onPressIn={() => setVisible(false)}>Close Modal</Button>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  // boxModal: {
  //   flex: 1,
  //   backgroundColor: "transparent",
  //   justifyContent: "flex-end",
  // },
  // boxModalInner: {
  //   backgroundColor: "red",
  //   height: 300,
  //   padding: 20,
  // },
});
