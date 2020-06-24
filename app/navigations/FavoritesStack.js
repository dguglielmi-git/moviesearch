import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/Favoritos/Favorites";
import ListaPeliculas from "../screens/Favoritos/ListaPeliculas";
import MoviesDesc from "../screens/Movies/MoviesDesc";

const Stack = createStackNavigator();

export default function FavoritesStack({
  userLogin,
  emailUser,
  setUserName,
  setEmailUser,
}) {
  const [lista, setLista] = useState([]);
  const [item, setItem] = useState([]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        options={{ title: "Peliculas y Series Favoritas" }}
      >
        {() => (
          <Favorites
            userLogin={userLogin}
            setUserName={setUserName}
            setEmailUser={setEmailUser}
            emailUser={emailUser}
            lista={lista}
            setLista={setLista}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="showList" options={{ title: "Detalle de Lista" }}>
        {() => <ListaPeliculas lista={lista} setItem={setItem} />}
      </Stack.Screen>
      <Stack.Screen
        name="moviesdesc"
        options={{ title: "Detalle Peliculas & Series" }}
      >
        {() => (
          <MoviesDesc
            item={item}
            setItem={setItem}
            userLogin={userLogin}
            userName={userName}
            emailUser={emailUser}
            setEmailUser={setEmailUser}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
