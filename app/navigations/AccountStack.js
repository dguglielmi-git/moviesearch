import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";

const Stack = createStackNavigator();

export default function AccountStack({
  userLogin,
  setUserLogin,
  userName,
  setUserName,
  setEmailUser,
}) {
  console.log("rastro userLogin: " + userLogin);

  return (
    <Stack.Navigator>
      <Stack.Screen name="account" options={{ title: "Mi Cuenta" }}>
        {() => (
          <Account
            setUserLogin={setUserLogin}
            userName={userName}
            setUserName={setUserName}
            setEmailUser={setEmailUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }}>
        {() => (
          <Login
            userLogin={userLogin}
            setUserLogin={setUserLogin}
            userName={userName}
            setUserName={setUserName}
            setEmailUser={setEmailUser}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registrar" }}
      />
    </Stack.Navigator>
  );
}
