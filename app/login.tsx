import MyButton from "@/components/myButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.navigate("/");
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
      <MyButton title={"Login"} onPress={onLogin} />
    </View>
  );
};

export default Login;
