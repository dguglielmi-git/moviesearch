import React, { useRef, useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { View, Text, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

export default function MoviesListasFavoritas(props) {
  const refDropDown = useRef();
  const {
    setIsVisible,
    listasPrivadas,
    valueDropdown,
    setValueDropdown,
  } = props;
  const [datosDropdown, setDatosDropDown] = useState([]);

  const agregarMovie = () => {};

  useEffect(() => {
    let aux = [];
    listasPrivadas.map((m) => {
      aux.push({
        id: m.id,
        value: m.title,
      });
    });
    setDatosDropDown(aux);
  }, []);

  const onChangeDropDownHandler = (val) => setValueDropdown(val);
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>
        Indique en que Lista de favoritos desea añadir esta película.
      </Text>
      <View style={{ alignItems: "flex-end" }}>
        <Image
          source={require("../../../assets/anadir.png")}
          style={{ height: 30, width: 30, marginRight: 10, marginBottom: 10 }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/amor.png")}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Dropdown
          ref={refDropDown}
          label="Lista de Favoritos:"
          data={datosDropdown}
          onChangeText={(e) => onChangeDropDownHandler(e)}
          value={valueDropdown}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <Button
          title="Agregar"
          buttonStyle={{ width: 100 }}
          onPress={() => agregarMovie()}
        />
        <Button
          title="Cerrar"
          buttonStyle={{ width: 100 }}
          onPress={() => setIsVisible(false)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
