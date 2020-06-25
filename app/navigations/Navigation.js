import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import MovieStack from "./MovieStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import MyContextProvider from "../hoc/MyContext";

const Tab = createBottomTabNavigator();

export default function Navigation() {

  return (
    <MyContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="moviestack"
          tabBarOptions={{
            inactiveTintColor: "#646464",
            activeTintColor: "#1164FE",
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color),
          })}
        >
          <Tab.Screen
            name="account"
            options={{ title: "Cuenta" }}
            component={AccountStack}
          />
          <Tab.Screen
            name="moviestack"
            options={{ title: "Peliculas" }}
            component={MovieStack}
          />
          <Tab.Screen
            name="favorites"
            options={{ title: "Favoritos" }}
            component={FavoritesStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "moviestack":
      iconName = "movie-open";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "menu":
      iconName = "dots-vertical";
      break;
    case "search":
      iconName = "magnify";
      break;
    case "account":
      iconName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
