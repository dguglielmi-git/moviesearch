import React, { useState,useRef, useEffect, useContext } from "react";
import * as firebase from "firebase";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Modal from "../../components/Modal";
import { Icon } from "react-native-elements";
import { MyContext } from "../../hoc/MyContext";
import InfoPeli from "../../components/Movies/InfoPeli";
import CommentMovie from "../../components/Movies/Comments/CommentMovie";
import ListComments from "../../components/Movies/Comments/ListComments";
import MoviesListasFavoritas from "../../components/Movies/MovieListasFavoritas";
import Toast from "react-native-easy-toast";

const { width: viewportWidth } = Dimensions.get("window");
const userData = [
  {
    id: 1,
    uri: "https://randomuser.me/api/portraits/men/41.jpg",
    username: "",
    vote: 2,
    nombre: "Mariano Martino",
    fechaVoto: "17/05/2020 01:13am",
    textoComentario:
      "Este es un comentario de prueba para ver como se ven los textos en la aplicación, aqui debe ir una opinion sobre la pelicula seleccionada.",
  },
  {
    id: 2,
    uri: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "",
    vote: 3,
    nombre: "Analia Sabatino",
    fechaVoto: "17/05/2020 01:13am",
    textoComentario:
      "Este es un comentario de prueba para ver como se ven los textos en la aplicación, aqui debe ir una opinion sobre la pelicula seleccionada.",
  },
  {
    id: 3,
    uri: "https://randomuser.me/api/portraits/men/41.jpg",
    username: "",
    vote: 5,
    nombre: "Mateo Teves",
    fechaVoto: "17/05/2020 01:13am",
    textoComentario:
      "Este es un comentario de prueba para ver como se ven los textos en la aplicación, aqui debe ir una opinion sobre la pelicula seleccionada.",
  },
  {
    id: 4,
    uri: "https://randomuser.me/api/portraits/men/41.jpg",
    username: "",
    vote: 1,
    nombre: "Daniel Guglielmi",
    fechaVoto: "17/05/2020 01:13am",
    textoComentario:
      "Este es un comentario de prueba para ver como se ven los textos en la aplicación, aqui debe ir una opinion sobre la pelicula seleccionada.",
  },
];

export default function MoviesDesc({ item }) {
  const [login, setLogin] = useState(null);
  const {
    setComentarios,
    getPrivateLists,
    listasPrivadas,
    privateLists,
    addNewMovieToList,
    getPrivateListsByID,
    newList,
    userName,
  } = useContext(MyContext);
  const [isVisible, setIsVisible] = useState(false);
  const [valueDropdown, setValueDropdown] = useState("");
  const [listado, setListado] = useState([]);
  const clickModal = () => setIsVisible(!isVisible);
  const [listaCreada, setListaCreada] = useState(false);
  const toastRefOk = useRef();

  const agregarOK = async (idLista) => {
    console.log("ID recibido:" + idLista);

    await addNewMovieToList(
      {
        id: item.id,
        imagen: item.imagen,
        overview: item.overview,
        title: item.title,
      },
      idLista
    );
    setIsVisible(false);
    setListaCreada(true)
  };

  const agregarFavorito = async () => {
    setValueDropdown([]);
     getPrivateLists();
    clickModal();
  };

  useEffect(() => {
    setComentarios([]);
    firebase.auth().onAuthStateChanged((user) => {
      /**
       *  Puede devolver null = usuario no logueado
       *  o puede devolver un objeto con los datos del
       *  usuario e indica que el usuario esta logueado
       */
      !user ? setLogin(false) : setLogin(true);
    });
    if (listaCreada) {
      setIsVisible(false);
      //toastRefOk.current.show("Se ha agregado a la lista.", 3000);
      setTstListUpdated(false);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.imagen }}
          resizeMode="stretch"
        />
      </View>
      {login && (
        <View style={styles.agregarFavoritos}>
          <Text style={styles.textFavoritos} onPress={() => agregarFavorito()}>
            Agregar a Favoritos
          </Text>

          <TouchableHighlight
            underlayColor="white"
            onPress={() => agregarFavorito()}
          >
            <Icon
              type="material-community"
              name="cards-heart"
              size={35}
              iconStyle={styles.iconFavoritos}
            />
          </TouchableHighlight>
        </View>
      )}
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>

        <InfoPeli item={item} />
        <CommentMovie item={item} />
        <ListComments item={item} />
      </View>
      <Toast
          ref={toastRefOk}
          position="top"
          opacity={0.9}
          style={styles.toastOk}
        />

      <Modal isVisible={isVisible}>
        <MoviesListasFavoritas
          setIsVisible={setIsVisible}
          listasPrivadas={listasPrivadas}
          valueDropdown={valueDropdown}
          setValueDropdown={setValueDropdown}
          agregarOK={agregarOK}
          newList={newList}
          item={item}
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  carouselContainer: {
    minHeight: 250,
  },
  carousel: {},
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 450,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    width: viewportWidth,
    height: 450,
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    alignSelf: "center",
    paddingVertical: 8,
    marginTop: 200,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
    color: "#2cd18a",
  },
  infoDescriptionRecipe: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  agregarFavoritos: {
    marginBottom: -40,
    marginLeft: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iconFavoritos: {
    color: "#1C51CD",
  },
  textFavoritos: {
    color: "#2B5FD7",
    marginLeft: 5,
  },
  toastOk: {
    backgroundColor: "#C41F01",
  },
});
