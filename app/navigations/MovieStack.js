import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../screens/Movies/Movies"
import MoviesDesc from '../screens/Movies/MoviesDesc'
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
        name="moviesdesc"
        component={MoviesDesc}
        options={{ title: "Detalle Peliculas & Series" }}
      />
    </Stack.Navigator>
  );
}
