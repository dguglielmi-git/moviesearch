import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TabMiLista() {
  return (
    <View>
      <View style={{ alignSelf:'center'}}>
        <Image
          source={require("../../../assets/img/folder.png")}
          style={{height:100, width:100}}
        />
        <Text style={styles.tituloGeneros}>Mis Listas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tituloGeneros: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign:'center'
  },
});
