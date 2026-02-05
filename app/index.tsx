import { Link } from "expo-router";
import { Text, View } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#dbeafe",
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#2563eb",
//   },
// });

// export default function Page() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello Tailwind</Text>
//     </View>
//   );
// }

const Index = () => {
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
        Hello theB
      </Text>
      <Link
        href={"/about"}
        style={{ marginTop: 20, fontSize: 16, color: "blue" }}
      >
        Go to About page
      </Link>
    </View>
  );
};

export default Index;
