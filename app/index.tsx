import MyButton from "@/components/myButton";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

const Index = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/signup");
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.form}>
        <Text style={styles.text}>Hello Wandrer!</Text>
        <TextInput placeholder="Enter your email" style={styles.inputBox} onChangeText={(e) => {console.log(e)}}/>
        <TextInput placeholder="Enter your password" style={styles.inputBox} />
        <MyButton title={"Continue"} onPress={onRegister} />
      </View>
    </View>
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
