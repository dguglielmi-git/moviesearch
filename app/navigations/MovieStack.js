import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../screens/Movies";

const Stack = createStackNavigator();

export default function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="movies"
        component={Movies}
        options={{ title: "Movies" }}
      />
      <Stack.Screen
        name="add-movies"
        component={Movies}
        options={{ title: "Añadir Movies" }}
      />
    </Stack.Navigator>
  );
}
