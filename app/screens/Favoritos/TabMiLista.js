import React, { useState, useEffect } from "react";
import { List, ListItem, Right, Left, Icon, Body } from "native-base";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function TabMiLista() {
  const [miLista, setMiLista] = useState([]);

  const listaprivada = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa27f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2xd72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adx3abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbx91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-105571e29d72",
      title: "Third Item",
    },
  ];
  const cargarLista = async () => {
    setMiLista(listaprivada);
  };

  useEffect(() => {
    cargarLista();
  }, []);

  const onPressLista = (item) => {
    console.log("Click Press Lista");
  };

  const renderLista = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(204,204,204,0.02)"
      onPress={() => onPressLista(item)}
      style={{ borderRadius: 25 }}
    >
      <View style={styles.container}>
        <Text style={styles.tituloLista}>Titulo Lista</Text>
        <Text style={styles.descripcionLista}>Descripción de la lista.</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={{ alignSelf: "center" }}>
        <Image
          source={require("../../../assets/img/folder.png")}
          style={styles.Imagen}
        />
        <Text style={styles.tituloGeneros}>Mis Listas</Text>
      </View>
      <View style={styles.botonAgregar}>
      <TouchableHighlight>
        <Image
          source={require("../../../assets/anadir.png")}
          style={styles.imgBotonAgregar}
        />
        </TouchableHighlight>
      </View>

      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={1}
        data={miLista}
        renderItem={renderLista}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    alignItems: "center",
  },
  tituloGeneros: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  Imagen: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  botonAgregar: {
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  imgBotonAgregar: {
    height: 30,
    width: 30,
  },
  tituloLista: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descripcionLista: {
    fontSize: 15,
  },
  container: {
    width: SCREEN_WIDTH - 70,
    borderWidth: 0.1,
    borderColor: "#63769C",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 90,
    padding: 5,
    marginTop: 10,
    backgroundColor: "#C4D6FB",
    shadowColor: "#63769C",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
});
