import React, { useRef, useState, useEffect } from "react";
import { Button, Input, Icon } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import { firebaseApp } from "../../utils/firebase";

export default function MoviesListasFavoritas(props) {
  const refDropDown = useRef();
  const toastRefOk = useRef();
  const {
    setIsVisible,
    listasPrivadas,
    valueDropdown,
    setValueDropdown,
    agregarOK,
    newList,
    item,
  } = props;
  const [datosDropdown, setDatosDropDown] = useState([]);
  const [agregarVisible, setAgregarVisible] = useState(false);
  const [nameNewList, setNameNewList] = useState("");
  const [descNewList, setDescNewList] = useState("");

  const toggleAgregar = () => setAgregarVisible(!agregarVisible);

  const agregarMovie = () => {
    let listSelected = "";
    setIsVisible(false);
    if (valueDropdown !== "") {
      datosDropdown.map((m) => {
        if (m.value === valueDropdown) {
          listSelected = m.id;
        }
      });
      agregarOK(listSelected);
    }
    console.log()
  };

  const onChangeNuevaLista = (e) => {
    setNameNewList(e.nativeEvent.text);
  };

  const onChangeDescNuevaLista = (e) => {
    setDescNewList(e.nativeEvent.text);
  };

  const icon_ = () => {
    if (agregarVisible) {
      return require("../../../assets/cerrar.png");
    }
    return require("../../../assets/anadir.png");
  };

  const crearNuevaLista = async () => {
    if (nameNewList === "" || descNewList === "") {
      toastRefOk.current.show("Debe completar ambos campos.", 3000);
    } else {
      const user = await firebase.auth().currentUser;
      newList({
        title: nameNewList,
        desc: descNewList,
        usuario: user.uid,
        privado: true,
        items: [
          {
            id: item.id,
            imagen: item.imagen,
            overview: item.overview,
            title: item.title,
          },
        ],
      });
    }
  };

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
      <Text style={styles.tituloListado}>
        Indique en que Lista de favoritos desea añadir esta película.
      </Text>

      <View style={styles.viewImagen}>
        <TouchableOpacity onPress={() => toggleAgregar()}>
          <Image source={icon_()} style={styles.imagen} />
        </TouchableOpacity>
        <Text>Crear lista</Text>
      </View>
      <View>
        <Toast
          ref={toastRefOk}
          position="top"
          opacity={0.9}
          style={styles.toastOk}
        />
      </View>

      {agregarVisible && (
        <View
          style={{
            marginBottom: 20,
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Nombre de la Lista Nueva"
            containerStyle={styles.inputForm}
            onChange={(e) => onChangeNuevaLista(e)}
            rightIcon={
              <Icon
                type="material-community"
                name="playlist-edit"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Input
            placeholder="Descripción de la Lista Nueva"
            containerStyle={styles.inputForm}
            onChange={(e) => onChangeDescNuevaLista(e)}
            rightIcon={
              <Icon
                type="material-community"
                name="playlist-edit"
                iconStyle={styles.iconRight}
              />
            }
          />
          <Button
            title="Agregar"
            buttonStyle={{
              backgroundColor: "#425D97",
              width: 200,
              borderRadius: 25,
              marginBottom: 10,
            }}
            onPress={() => crearNuevaLista()}
          />
        </View>
      )}
      <View style={styles.dropDownStyles}>
        <Dropdown
          ref={refDropDown}
          label="Lista de Favoritos:"
          data={datosDropdown}
          onChangeText={(e) => onChangeDropDownHandler(e)}
          value={valueDropdown}
        />
      </View>
      <View style={styles.botonera}>
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

const styles = StyleSheet.create({
  tituloListado: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewImagen: {
    flexDirection: "row",
    width: 200,
    alignItems: "center",
  },
  imagen: {
    height: 30,
    width: 30,
    marginRight: 10,
    marginBottom: 10,
  },
  dropDownStyles: {
    marginBottom: 30,
  },
  botonera: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  iconRight: {
    color: "#c1c1c1",
  },
  toastOk: {
    backgroundColor: "#C41F01",
  },
});
