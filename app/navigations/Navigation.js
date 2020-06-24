import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import MovieStack from "./MovieStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import MyContextProvider from "../hoc/MyContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
  const [userLogin, setUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [testProvider, setTestProvider] = useState("PRUEBA PROVIDER");

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
            userLogin={userLogin}
          >
            {() => (
              <AccountStack
                userLogin={userLogin}
                setUserLogin={setUserLogin}
                userName={userName}
                setUserName={setUserName}
                setEmailUser={setEmailUser}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="moviestack" options={{ title: "Peliculas" }}>
            {() => (
              <MovieStack
                userLogin={userLogin}
                setUserLogin={setUserLogin}
                userName={userName}
                setUserName={setUserName}
                emailUser={emailUser}
                setEmailUser={setEmailUser}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="favorites" options={{ title: "Favoritos" }}>
            {() => (
              <FavoritesStack
                userLogin={userLogin}
                emailUser={emailUser}
                setUserName={setUserName}
                setEmailUser={setEmailUser}
              />
            )}
          </Tab.Screen>
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
