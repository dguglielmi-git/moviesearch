import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../screens/Movies/Movies";
import MoviesDesc from "../screens/Movies/MoviesDesc";
import Login from "../screens/Account/Login";

const Stack = createStackNavigator();

export default function MovieStack({
  userLogin,
  setUserLogin,
  userName,
  setUserName,
  emailUser,
  setEmailUser
}) {
  const [item, setItem] = useState([]);
  const [callFromMovie, setCallFromMovie] = useState(true);
  return (
    <Stack.Navigator>
      <Stack.Screen name="movies" options={{ title: "Movies" }}>
        {() => <Movies item={item} setItem={setItem} userLogin={userLogin} />}
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
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }}>
        {() => (
          <Login
            userLogin={userLogin}
            setUserLogin={setUserLogin}
            callFromMovie={callFromMovie}
            setUserName={setUserName}
            setEmailUser={setEmailUser}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
