import { View, Text, Image } from "react-native";
import React from "react";
import MyButton from "@/components/myButton";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();

  const onSignup = () => {
    router.navigate("/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{
          width: "100%",
          height: 600,
        }}
        resizeMode="contain"
      />
      <MyButton title={"Register"} onPress={onSignup} />
    </View>
  );
};

export default SignUp;
