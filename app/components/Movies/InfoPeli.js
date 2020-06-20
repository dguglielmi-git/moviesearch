import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default function InfoPelis({ item }) {
  const language = (lang) => {
    let result = "";
    switch (lang) {
      case "en":
        result = "Inglés";
        break;
      case "es":
        result = "Español";
        break;
      default:
        result = "No informado";
        break;
    }
    return result;
  };

  /**
   *
   * Funcion para dibujar cantidad de Estrellas segun se indique en el parametro cant
   */
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
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Icon
          type="material-community"
          name="chat-processing"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Idioma Original: </Text>
        <Text style={styles.resultado}>{language(item.original_language)}</Text>
      </View>

      <View style={styles.innerContainer}>
        <Icon
          type="material-community"
          name="star-outline"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Promedio Votos IMDB:</Text>
        <Text style={styles.resultado}>{item.vote_average}</Text>
      </View>

      <View style={styles.innerContainer}>
        <Icon
          type="material-community"
          name="vote"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Cant. Votos:</Text>
        <Text style={styles.resultado}>{item.vote_count}</Text>
      </View>

      <View style={styles.innerContainer}>
        <Icon
          type="material-community"
          name="calendar-month-outline"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Fecha Lanzamiento:</Text>
        <Text style={styles.resultado}>{item.release}</Text>
      </View>

      <View style={styles.innerContainer}>
      <Icon
          type="material-community"
          name="trophy"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Calif. Usuarios APP:</Text>
        {starCant(5)}
      </View>

      <View style={styles.innerContainer2}>
        <Icon
          type="material-community"
          name="book-open-page-variant"
          size={30}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.titulos}>Descripción</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.resultado}>{item.overview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  innerContainer2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:20
  },
  titulos: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5
  },
  resultado: {
    fontSize: 18,
  },
  description: {
    marginTop: 5,
  },
  iconStyle: {
    color: "#D32F2F",
  },
  iconStarFilled: {
    color: "#FFB300",
  },
});
