import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account";
import Login from "../screens/Account/Login";
import Register from "../screens/Account/Register";

const Stack = createStackNavigator();

export default function AccountStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        options={{ title: "Mi Cuenta" }}
        component={Account}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Iniciar Sesión" }}
        component={Login}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registrar" }}
      />
    </Stack.Navigator>
  );
}
