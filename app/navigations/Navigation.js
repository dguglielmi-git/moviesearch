import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import MovieStack from "./MovieStack";
import FavoritesStack from "./FavoritesStack";
import TopMoviesStack from "./TopMoviesStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  return (
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
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
       <Tab.Screen
          name="moviestack"
          component={MovieStack}
          options={{ title: "Peliculas" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="menu"
          component={TopMoviesStack}
          options={{ title: "Menu" }}
        />
      </Tab.Navigator>
     
    </NavigationContainer>
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
