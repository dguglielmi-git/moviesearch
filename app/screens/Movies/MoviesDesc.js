import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import InfoPeli from "../../components/Movies/InfoPeli";
import CommentMovie from "../../components/Movies/Comments/CommentMovie";
import ListComments from "../../components/Movies/Comments/ListComments";

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

export default function MoviesDesc({ route, navigation }) {
  const [comentario, setComentario] = useState("");
  const { item } = route.params;
  const updateComentario = (coment) => setComentario(coment);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.imagen }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>

        <InfoPeli item={item} />
        <CommentMovie comentario={updateComentario} />
        <ListComments userData={userData} />
      </View>
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
    marginTop: 20,
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
});
