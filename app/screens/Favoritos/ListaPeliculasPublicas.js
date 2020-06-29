import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  FlatList,
} from "react-native";
import { Divider } from "react-native-elements";
import { MyContext } from "../../hoc/MyContext";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Button } from "native-base";
import { getMovieByID } from "../../controller/controllerApi";

export default function ListaPeliculasPublicas() {
  const { setItem, idListaSel, listasPublicas, deleteMovieList, getPublicLists } = useContext(
    MyContext
  );
  const [listado, setListado] = useState([]);
  const [descLista, setDescLista] = useState("");
  const [updateListaPeliculas, setUpdateListaPeliculas] = useState(false);

  const cargarPeliculas = async () => {
    await getPublicLists();
    setListado([]);
    listasPublicas.forEach((l) => {
      if (l.id === idListaSel) {
        setListado(l.items);
        setDescLista(l.desc);
      }
    });
  };

  useEffect(() => {
    cargarPeliculas();
    if (updateListaPeliculas) {
      console.log("Se ejecuta la actualizacion");
      cargarPeliculas();
      setUpdateListaPeliculas(false);
    }
  }, [updateListaPeliculas]);

  return (
    <Container>
      <View style={styles.viewContainer}>
        <Text style={styles.tituloContainer}>Listas Públicas </Text>
        <Text style={styles.mensajeDomain}>{descLista}</Text>

        <Divider style={{ backgroundColor: "black", marginBottom: 10 }} />
      </View>
      <Content styles={styles.contentStyle}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={listado}
          renderItem={(datos) => (
            <ListadoPeliculas
              datos={datos}
              setItem={setItem}
              deleteMovieList={deleteMovieList}
              listado={listado}
              setUpdateListaPeliculas={setUpdateListaPeliculas}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  );
}

function ListadoPeliculas(props) {
  const {
    datos,
    setItem,
  } = props;
  const { id, imagen, overview, title } = datos.item;
  const navigation = useNavigation();
  /**
   * Recupera los datos de la pelicula con su ID y
   * se lo envia a MovieDesc para renderizarla
   */
  const showMovie = async function (id) {
    let res = [];
    res = await getMovieByID(id);
    setItem(res);
    navigation.navigate("moviesdesc");
  };

  return (
    <View>
      <TouchableHighlight underlayColor="white" onPress={() => showMovie(id)}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image style={styles.imagenPelicula} source={{ uri: imagen }} />
          </View>
          <View style={styles.titleContainer}>
            <Text note numberOfLines={2} style={styles.titleMovie}>
              {title}
            </Text>

            <Text note numberOfLines={3} style={styles.overview}>
              {overview}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
  },
  tituloContainer: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  mensajeDomain: {
    fontSize: 18,
    fontStyle: "italic",
    color: "blue",
  },
  switchLabelStyle: {
    color: "black",
    fontWeight: "900",
  },
  quitarIcon: {
    height: 20,
    width: 20,
  },
  titleContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
  },
  titleMovie: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    width: 270,
  },
  imagenPelicula: {
    height: 80,
    width: 80,
    alignContent: "center",
    marginLeft: 5,
  },
  overview: {
    width: 270,
    marginRight: 10,
    marginLeft: 5,
  },
});
