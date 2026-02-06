import { Link } from "expo-router";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#bbaaff",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "blue" }}>
        About theB
      </Text>
      <Link
        href={"/"}
        style={{ marginTop: 20, fontSize: 16, color: "blue" }}
      >
        Go to Index page
      </Link>
    </View>
  );
};

export default About;
