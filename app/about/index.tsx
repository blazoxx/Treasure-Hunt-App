import { Link } from "expo-router";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dbea00",
      }}
    >
      <Text style={{ fontSize: 18, color: "blue" }}>
        This is the about page
      </Text>
      <Link href={"/"} style={{ marginTop: 20, fontSize: 16, color: "blue" }}>
        Go to Index Page
      </Link>
    </View>
  );
};

export default About;
