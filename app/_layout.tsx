import { Stack } from "expo-router";
import React from "react";

const rootLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="index"/> */}
      {/* <Stack.Screen name="instagram"/> */}
      {/* <Stack.Screen name="login"/> */}
      {/* <Stack.Screen name="signup"/> */}
      <Stack.Screen name="home"/>
    </Stack>
  );
};

export default rootLayout;
