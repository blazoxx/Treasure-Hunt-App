import React from "react";
import { FlatList, Text, View } from "react-native";

const Home = () => {
  return (
    // * This is the Insta Story page, where we will show the stories of the users in a horizontal scroll view. Each story will be represented by a circle with the user's profile picture and name. When the user clicks on a story, it will open the story in a new screen.
    // ! This method is not the best way to implement the stories, but it is a quick way to show the concept. We will implement a better way to show the stories in the future. As this gives all data at once, which is not good for performance.
    // <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, marginTop: 30 }}>
    //   {Array(10)
    //     .fill(0)
    //     .map((_, i) => (
    //       <View
    //         key={i}
    //         style={{
    //           backgroundColor: "blue",
    //           padding: 20,
    //           borderRadius: "50%",
    //           borderColor: "limegreen",
    //           borderWidth: 4,
    //           margin: 10,
    //           width: 100,
    //           height: 100,
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Text style={{color: "white"}}>Item {i + 1}</Text>
    //       </View>
    //     ))}
    // </ScrollView>

    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        // numColumns={3}
        data={Array(10).fill(0)}
        keyExtractor={(_, i) => i.toString()} // * This is a simple way to generate unique keys for the items in the list. In a real application, you would use a unique identifier from your data source. */
        style={{ height: 160 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: "blue",
              padding: 20,
              borderRadius: "50%",
              borderColor: "limegreen",
              borderWidth: 4,
              marginTop: 30,
              margin: 10,
              width: 100,
              height: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Story {index + 1}</Text>
          </View>
        )}
      />

      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={Array(20).fill(0)}
        keyExtractor={(_, i) => i.toString()} // * This is a simple way to generate unique keys for the items in the list. In a real application, you would use a unique identifier from your data source. */
        style={{ marginTop: 10 }}
        contentContainerStyle={{ alignItems: "center" }}
        ListHeaderComponent={
          <View
            style={{ width: "100%", height: 100, backgroundColor: "red" }}
          ></View>
        }
        ListFooterComponent={
          <View
            style={{ width: "100%", height: 100, backgroundColor: "red" }}
          ></View>
        }
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: "blue",
              marginTop: 30,
              margin: "1%",
              marginBottom: 30,
              width: "30%",
              height: 150,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Post {index + 1}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
