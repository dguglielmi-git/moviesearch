import React, { useState, useContext, useRef, useEffect } from "react";
import * as firebase from "firebase";
import Toast from "react-native-easy-toast";
import { Button as Boton } from "native-base";
import { MyContext } from "../../../hoc/MyContext";
import { useNavigation } from "@react-navigation/native";
import { AirbnbRating, Button } from "react-native-elements";
import { View, StyleSheet, TextInput, Text } from "react-native";


export default function Commentmovie({ item }) {
  const [puntaje, setPuntaje] = useState(0);
  const [comment, setComment] = useState("");
  const navigation = useNavigation();
  const textoCom = useRef();
  const toastRefOk = useRef();
  const {
    checkLogin,
    addComentario,
    resInsert,
    setResInsert,
    getComentario,
  } = useContext(MyContext);

  const ratingCompleted = (rating) => setPuntaje(rating);

  useEffect(() => {
    if (resInsert) {
      toastRefOk.current.show(
        "El comentario se ha ingresado correctamente",
        3000
      );
      textoCom.current.clear();
      setResInsert(false);
      getComentario(item.id);
    }
  }, [resInsert]);

  const _sendComment = async () => {
    const user = await firebase.auth().currentUser;
    if (comment !== "") {
      const res = await addComentario(
        item.id,
        user.uid,
        user.displayName,
        comment,
        user.photoURL,
        user.email,
        puntaje === 0 ? 3 : puntaje
      );
    }
  };

  const onChangeTxt = (e) => setComment(e);

  return (
    <View style={styles.comentariosContainer}>
      <View style={{ height: 120 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Comentario</Text>
          {!checkLogin() && (
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
          ref={textoCom}
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
        {checkLogin() && (
          <Button
            title="Comentar"
            buttonStyle={styles.btnStyle}
            onPress={() => _sendComment()}
          />
        )}
      </View>
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
  toastOk: {
    backgroundColor: "#483076",
  },
});
