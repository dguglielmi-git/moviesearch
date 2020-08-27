import React, { useContext, useEffect } from "react";
import { MyContext } from "../hoc/MyContext";
import MoviesDesc from "../screens/Movies/MoviesDesc";
import Favorites from "../screens/Favoritos/Favorites";
import { createStackNavigator } from "@react-navigation/stack";
import ListaPeliculas from "../screens/Favoritos/ListaPeliculas";
import ListaPeliculasPublicas from "../screens/Favoritos/ListaPeliculasPublicas";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  const { item, getPrivateLists } = useContext(MyContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        options={{ title: "Peliculas y Series Favoritas" }}
        component={Favorites}
      />
      <Stack.Screen
        name="showList"
        options={{ title: "Detalle de Lista" }}
        component={ListaPeliculas}
      />

      <Stack.Screen
        name="showPublicList"
        options={{ title: "Detalle de Lista" }}
        component={ListaPeliculasPublicas}
      />

      <Stack.Screen
        name="moviesdesc"
        options={{ title: "Detalle Peliculas & Series" }}
      >
        {() => <MoviesDesc item={item} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
