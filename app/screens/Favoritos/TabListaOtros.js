import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import {MyContext} from '../../hoc/MyContext'

const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function TabListaOtros() {
  const [miLista, setMiLista] = useState([]);
  const {setLista, listapublica} = useContext(MyContext);

  const cargarLista = async () => {
    setMiLista(listapublica);
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
          <Image
            source={require("../../../assets/cine.png")}
            style={styles.imgCine}
          />
          <View>
            <View>
              <Text style={styles.tituloLista}>{item.title}</Text>
            </View>
            <Text style={styles.descripcionLista}>{item.desc}</Text>
          </View>
        </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.tituloContainer}>
        <Image
          source={require("../../../assets/img/simpsonfolder.png")}
          style={styles.Imagen}
        />
        <Text style={styles.tituloGeneros}>Listas Públicas compartidas por Usuarios.</Text>
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
    backgroundColor:'#FCE9D6',
  },
  tituloGeneros: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  Imagen: {
    alignSelf: "center",
    height: 100,
    width: 100,
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
  imgCine:{
    height: 30,
    width: 30,
    marginTop:5,
    marginRight:10,
  },
  tituloContainer: {
    alignSelf: "center",
    marginBottom: 15,
    width: 300,
  },
  tituloLista: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descripcionLista: {
    fontSize: 15,
    width:300,
    height:20,
  },
  container: {
    width: SCREEN_WIDTH - 60,
    borderWidth: 0.1,
    borderColor: "#63769C",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 60,
    padding: 5,
    marginTop: 10,
    backgroundColor: "#F3F4F8",
    shadowColor: "#63769C",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    flexDirection: "row",
  },
});
