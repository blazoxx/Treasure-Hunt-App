import MyButton from "@/components/myButton";
import { Link, useRouter } from "expo-router";
import { Text, View, Image } from "react-native";

const Index = () => {

  const router = useRouter();

  const onRegister = () => {
    router.navigate("/signup");
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require("@/assets/images/logo.png")} style={{ width: "100%", height: 400 }} resizeMode="cover" />
      {/* <Text style={{ fontSize: 30, fontWeight: "bold", color: "blue", margin: 40 }}>
        Hello theB
      </Text> */}
      <MyButton title={"Continue"} onPress={onRegister}/>
    </View>
  );
};

export default Index;
