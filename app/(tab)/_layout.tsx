import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const tabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  //   backgroundColor: "blue",
                  width: 50,
                  height: 50,
                  //   borderRadius: 50,
                  //   bottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="home" size={24} color="#ddddff" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabel: () => null, // Hide label
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  backgroundColor: "#bbcfff",
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  bottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="plus" size={35} color="white" />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <View
                style={{
                  //   backgroundColor: "blue",
                  width: 50,
                  height: 50,
                  //   borderRadius: 50,
                  //   bottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="user" size={24} color="#ddddff" />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default tabRoot;
