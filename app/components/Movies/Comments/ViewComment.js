import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Icon } from "react-native-elements";

export default function ViewComment({ userData }) {
  const starCant = (cant) => {
    var payment = [];

    for (let i = 0; i < cant; i++) {
      payment.push(
        <Icon
          type="material-community"
          size={20}
          name="star"
          iconStyle={styles.iconStarFilled}
        />
      );
    }
    return payment;
  };

  return (
    <View>
      <View style={styles.vistaComentarios}>
        <Avatar
          rounded
          source={{
            uri: userData.uri,
          }}
          size="medium"
        />
        <View>
          <View style={styles.innerContainer}>{starCant(userData.vote)}</View>
          <Text style={styles.infoUser}>{userData.nombre}</Text>
          <Text style={styles.infoDate}>{userData.fechaVoto}</Text>
        </View>
      </View>
      <View style={styles.textoComentario}>
        <Text>{userData.textoComentario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vistaComentarios: {
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
  },
  innerContainer: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  infoUser: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    color: "blue",
  },
  infoDate: {
    fontSize: 16,
    marginLeft: 10,
  },
  textoComentario: {
    marginTop: 10,
    fontStyle: "italic",
  },
  iconStarFilled: {
    color: "#FFB300",
  },
});
