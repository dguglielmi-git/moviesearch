import React, { useEffect, useState, useContext } from "react";
import ViewComment from "./ViewComment";
import * as firebase from "firebase";
import { Icon } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { MyContext } from "../../../hoc/MyContext";
import { firebaseApp } from "../../../utils/firebase";

const db = firebase.firestore(firebaseApp);

export default function ListComments({ item }) {
  const [posHand, setPosHand] = useState("");
  const { comentarios, sinComentario, getComentario } = useContext(MyContext);
  
  useEffect(() => {
    getComentario(item.id);
  }, []);

  const clickHand = () =>
    setPosHand(
      "flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20"
    );
  const unClickHand = () =>
    setPosHand(
      "flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20"
    );

  return (
    <View style={styles.containerComentarios}>
      <ViewComment comentarios={comentarios} sinComentario={sinComentario} />
      <View style={styles.textoComentario}>
        <View style={posHand}>
          <Icon
            type="material-community"
            name="hand-right"
            size={30}
            onPress={clickHand}
            onBlur={unClickHand}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerComentarios: {
    flex: 1,
    width: "100%",
    borderTopWidth: 0.7,
    borderTopColor: "#7CB1D7",
  },
  textoComentario: {
    marginTop: 10,
    fontStyle: "italic",
  },
  tituloComentarios: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
});
