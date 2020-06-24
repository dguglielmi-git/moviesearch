import React, { useState } from "react";
import { Button as Boton } from "native-base";
import { AirbnbRating, Button } from "react-native-elements";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Commentmovie({ login, userName, emailUser }) {
  const [puntaje, setPuntaje] = useState(0);
  const [comment, setComment] = useState("");
  const navigation = useNavigation();

  const ratingCompleted = (rating) => setPuntaje(rating);

  const sendComment = () => {
    // userName: 'Daniel Guglielmi
    // mail: setEmailUser
    // fecha: funcion
    // vote: puntaje
    // Utilizar esta estructura para impactar los datos en la base
    // Luego de la llamada a esta funcion se deberian re-renderizar los comentarios
  };

  const onChangeTxt = (e) => setComment(e);

  return (
    <View style={styles.comentariosContainer}>
      <View style={{ height: 120 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Comentario</Text>
          {!login && (
            <Boton
              rounded
              bordered
              style={{ width: 95, height: 25, justifyContent: "center" }}
              onPress={() => navigation.navigate("login")}
            >
              <Text>Iniciar Sesión</Text>
            </Boton>
          )}
        </View>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={(e) => onChangeTxt(e)}
        />
      </View>
      <View style={styles.sendComment}>
        <View style={styles.infoContainer}>
          <AirbnbRating
            onFinishRating={ratingCompleted}
            size={20}
            showRating={false}
          />
        </View>
        {userLogin && (
          <Button
            title="Comentar"
            buttonStyle={styles.btnStyle}
            onPress={sendComment}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAccordion: {
    width: "100%",
  },
  botonComentar: {
    marginTop: 30,
  },
  comentariosContainer: {
    width: "100%",
    height: 200,
    marginTop: 40,
  },
  input: {
    paddingRight: 10,
    lineHeight: 13,
    flex: 2,
    textAlignVertical: "top",
    borderWidth: 1,
    width: "100%",
  },
  btnStyle: {
    marginTop: 10,
    justifyContent: "center",
    height: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sendComment: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
