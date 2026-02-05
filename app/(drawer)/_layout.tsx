import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const rootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
    </GestureHandlerRootView>
  );
};

export default rootLayout;
