import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AirbnbRating, Button } from "react-native-elements";

export default function Commentmovie({ comentario }) {
  const [visible, setVisible] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  const ratingCompleted = (rating) => setPuntaje(rating);
  const showComment = () => setVisible(true);
  const sendComment = () => setVisible(false);
  const onChangeTxt = (e) => comentario(e);

  if (visible) {
    return (
      <View style={styles.comentarios}>
        <View style={styles.infoContainer}>
          <AirbnbRating 
          onFinishRating={ratingCompleted} 
          size={30}
          />
        </View>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={(e) => onChangeTxt(e)}
        />
        <Button
          title="Enviar Comentario"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btnStyle}
          onPress={sendComment}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.botonComentar}>
        <Button title="Comentar" onPress={showComment} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerAccordion: {
    width: "100%",
  },
  botonComentar: {
    marginTop:30,
  },
  comentarios: {
    alignItems: "center",
    width: "100%",
    height: 350,
    marginTop: 30,
    paddingBottom: 30,
  },
  input: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: "top",
    borderWidth: 1,
    width: "100%",
  },
  btnContainer: {
    width: "100%",
  },
  btnStyle: {
    marginTop: 20,
    justifyContent: "center",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
