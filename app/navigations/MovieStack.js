import React, { useState, useContext } from "react";
import { MyContext } from "../hoc/MyContext";
import Login from "../screens/Account/Login";
import Movies from "../screens/Movies/Movies";
import MoviesDesc from "../screens/Movies/MoviesDesc";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MovieStack() {
  const [item, setItem] = useState([]);
  const { userLogin } = useContext(MyContext);

  return (
    <Stack.Navigator>
      <Stack.Screen name="movies" options={{ title: "Movies" }}>
        {() => <Movies item={item} setItem={setItem} userLogin={userLogin} />}
      </Stack.Screen>
      <Stack.Screen
        name="moviesdesc"
        options={{ title: "Detalle Peliculas & Series" }}
      >
        {() => <MoviesDesc item={item} />}
      </Stack.Screen>
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }}>
        {() => <Login callFromMovie={true} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
