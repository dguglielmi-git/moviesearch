import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import ViewComment from "./ViewComment";
import {MyContext} from '../../../hoc/MyContext'

export default function ListComments({ userData}) {
  const [posHand, setPosHand] = useState("");
  const {emailUser, userName} = useContext(MyContext);
  
  const clickHand = () => setPosHand("flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20");
  const unClickHand = () => setPosHand("flexDirection: 'row', justifyContent: 'flex-start', marginTop: 20");
  return (
    <View style={styles.containerComentarios}>
      {userData.map((user) => (
        <ViewComment userData={user} userName={userName} emailUser={emailUser} />
      ))}
      <View style={styles.textoComentario}>
        <View
          style={posHand}
        >
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
    borderTopColor: "#7CB1D7"
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
