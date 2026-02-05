import { Link } from "expo-router";
import { Text, View } from "react-native";

const about = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dbeafe",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "blue" }}>
        This is the About Page
      </Text>
      <Link href={"/"} style={{ marginTop: 20, fontSize: 16, color: "blue" }}>
        Go to Index Page
      </Link>
    </View>
  );
};

export default about;
