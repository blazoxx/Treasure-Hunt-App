import MyButton from "@/components/myButton";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Index = () => {
  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });

  useEffect(() => {
    console.log("Value was changed");
  }, [value?.value1]);

  const onRegister = () => {
    console.log(value?.value1);
    console.log(value?.value2);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.form}>
        <Text style={styles.text}>Hello Wandrer!</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.inputBox}
          onChangeText={(e) => {
            setValue((prev) => ({ ...prev, value1: e }));
          }}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.inputBox}
          onChangeText={(e) => {
            setValue((prev) => ({ ...prev, value1: e }));
          }}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.inputBox}
          onChangeText={(e) => {
            setValue((prev) => ({ ...prev, value1: e }));
          }}
        />
        <TextInput
          placeholder="Enter your email"
          style={styles.inputBox}
          onChangeText={(e) => {
            setValue((prev) => ({ ...prev, value1: e }));
          }}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.inputBox}
          onChangeText={(e) => {
            setValue((prev) => ({ ...prev, value2: e }));
          }}
        />
        <MyButton title={"Continue"} onPress={onRegister} />
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  inputBox: {
    width: "100%",
    height: 50,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 600,
  },
  form: {
    padding: 20,
    gap: 15,
  },
});
