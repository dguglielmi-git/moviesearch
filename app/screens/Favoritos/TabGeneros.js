import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Container, Content, List, ListItem, Right, Button } from "native-base";
import { getGeneros } from "../../controller/controllerApi";
import Toast from "react-native-easy-toast";
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function TabMiLista() {
  const refDropDown = useRef();
  const itemRef = useRef();
  const toastRef = useRef();
  const toastRefOk = useRef();
  const [valueDropdown, setValueDropdown] = useState("");
  const [listGenerosFavoritos, setListGenerosFavoritos] = useState([]);
  const [listaGeneros, setListaGeneros] = useState([]);
  const onChangeDropDownHandler = (val) => setValueDropdown(val);

  useEffect(() => {
    getGeneros().then((resul) => setListaGeneros(resul));
  }, []);

  const exists = (item) => {
    let verificado = false;

    listGenerosFavoritos.map((gen, key) => {
      if (gen.genero === item) verificado = true;
    });

    return verificado;
  };

  const listaVacia = () => (
    <View style={styles.viewListaVacia}>
      <Text style={styles.textListaVacia}>- Lista vacia -</Text>
    </View>
  );

  const eliminar = (val) => {
    let aux = [];
    for (let i = 0; i < listGenerosFavoritos.length; i++) {
      if (listGenerosFavoritos[i].genero !== val) {
        aux.push(listGenerosFavoritos[i]);
      }
    }
    setListGenerosFavoritos(aux);
  };

  const agregar = (val) => {
    let aux = [];
    if (val === "") {
      toastRef.current.show("Debe seleccionar un Género.", 3000);
    }
    // setListGenerosFavoritos([]);
    else if (exists(val)) {
      toastRef.current.show("El genero ya esta agregado a la lista", 3000);
    } else {
      let i = 0;
      for (; i < listGenerosFavoritos.length; i++) {
        aux.push({
          id: listGenerosFavoritos[i].id,
          genero: listGenerosFavoritos[i].genero,
        });
      }
      aux.push({ id: i, genero: val });

      setListGenerosFavoritos(aux);
    }
  };

  const guardar = () => {
    toastRefOk.current.show("Se han guardado los cambios", 3000);
    // Llamar a una funcion de controller que guarde los generos acumulados en:
    // listGenerosFavoritos
  };
  
  const renderItems = (item) => (
    <ListItem style={styles.listItem}>
      <Text>{item.genero}</Text>
      <Right>
        <Button
          transparent
          style={styles.buttonList}
          onPress={() => eliminar(item.genero)}
        >
          <Text>Eliminar</Text>
        </Button>
      </Right>
    </ListItem>
  );

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.cabecera}>
        <Image
          source={require("../../../assets/img/folder.png")}
          style={styles.Imagen}
        />
        <Text style={styles.tituloGeneros}>
          Configuración de Lista de Generos Favoritos
        </Text>
      </View>
      <View style={styles.Agregar}>
        <View style={{ width: 300 }}>
          <Dropdown
            ref={refDropDown}
            label="Seleccione un Género:"
            data={listaGeneros}
            onChangeText={(e) => onChangeDropDownHandler(e)}
          />
        </View>
        <TouchableHighlight onPress={() => agregar(valueDropdown)}>
          <Image
            source={require("../../../assets/anadir.png")}
            style={styles.imgBotonAgregar}
          />
        </TouchableHighlight>
      </View>

      <Text style={styles.tituloListaPersonal}>Generos Favoritos</Text>
      {listGenerosFavoritos.length === 0 && listaVacia()}
      <Container>
        <Content>
          <List>
            {listGenerosFavoritos.map((item, key) => renderItems(item))}
          </List>
        </Content>
      </Container>
      <View style={{ alignItems: "center" }}>
        <Button style={styles.buttonGuardar} onPress={guardar}>
          <Text style={{ color: "white" }}>Guardar</Text>
        </Button>
      </View>
      <Toast
        ref={toastRef}
        position="center"
        opacity={0.9}
        style={styles.toastError}
      />
      <Toast
        ref={toastRefOk}
        position="center"
        opacity={0.9}
        style={styles.toastOk}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cabecera: {
    alignSelf: "center",
    alignItems: "center",
  },
  listItem: {
    justifyContent: "space-between",
  },
  tituloGeneros: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  tituloListaPersonal: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "blue",
    marginTop: 15,
  },
  Imagen: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  Agregar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonList: {
    height: 20,
  },
  imgBotonAgregar: {
    height: 30,
    width: 30,
  },
  buttonGuardar: {
    width: "80%",
    justifyContent: "center",
  },
  viewListaVacia: {
    alignItems: "center",
    marginTop: 40,
  },
  textListaVacia: {
    fontSize: 15,
    color: "gray",
  },
  toastError: {
    backgroundColor: "#BD0C0C",
  },
  toastOk: {
    backgroundColor: "#483076",
  },
});
