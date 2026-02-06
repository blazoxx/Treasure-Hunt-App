import { Drawer } from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const rootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="About/index" options={{ title: "About" }} />
        <Drawer.Screen
          name="(tab)"
          options={{ title: "Tabs", headerShown: false }}
        />
        <Drawer.Screen
          name="(drawer)"
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default rootLayout;
