import React from "react";
import { YellowBox } from "react-native";
import { firebaseApp } from "./app/utils/firebase";
import Navigation from "./app/navigations/Navigation";
YellowBox.ignoreWarnings(["Setting a timer"]);

import { decode, encode } from "base-64";

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  return <Navigation />;
}
