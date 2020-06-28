import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { size } from "lodash";
import { Icon } from "react-native-elements";

export default function ViewComment(props) {
  const { comentarios, sinComentario } = props;

  return (
    <View>
      {size(comentarios) > 0 ? (
        <FlatList
          data={comentarios}
          renderItem={(datos) => <Comentario datos={datos} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : !sinComentario ? (
        <View>
          <ActivityIndicator size="large" hidesWhenStopped={true} />
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            - No hay comentarios de los usuarios -
          </Text>
        </View>
      )}
    </View>
  );
}

function Comentario(props) {
  const { datos, sinComentario } = props;
  const { comentario, votacion, nombre, fechavoto, imagen } = datos.item;

  const starCant = (cant) => {
    var payment = [];

    // userName = utilizado para detectar si un comentario es del propio usuario
    // debe aparecer la opcion de eliminar comentario.
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
        <Image
          source={{ uri: imagen }}
          style={{ height: 60, width: 60, borderRadius: 50 }}
        />
        <View>
          <View style={styles.innerContainer}>{starCant(votacion)}</View>
          <Text style={styles.infoUser}>{nombre}</Text>
          <Text style={styles.infoDate}>
            {fechavoto
              ? new Date(fechavoto.toDate()).toString().substring(0, 25)
              : "--/--/----"}
          </Text>
        </View>
      </View>
      <View style={styles.textoComentario}>
        <Text>{comentario}</Text>
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
    marginTop: 20,
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
    color: "#2D48B6",
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
