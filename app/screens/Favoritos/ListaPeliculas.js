import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { Divider } from "react-native-elements";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { getMovieByID } from "../../controller/controllerApi";
import ToggleSwitch from "toggle-switch-react-native";
import { MyContext } from "../../hoc/MyContext";

export default function ListaPeliculas() {
  const navigation = useNavigation();
  const [domainList, setDomainList] = useState(false);
  const {
    lista,
    setItem,
    idListaSel,
    checkExists,
    getDomainList,
    changeDomainList,
  } = useContext(MyContext);
  const listado = [];

  const toggleDomain = () => {
    setDomainList(!domainList);
    let status = getDomainList();
    let id = idListaSel;
    changeDomainList(id,!status)
  };

  const labelDomain = () => (domainList ? "Lista Pública" : "Lista Privada");
  
  useEffect(() => {
    console.log(getDomainList());
  });
  
  /**
   * Recupera los datos de la pelicula con su ID y
   * se lo envia a MovieDesc para renderizarla
   */
  const showMovie = async function (id) {
    let res = [];
    res = await getMovieByID(id);
    setItem(res);
    navigation.navigate("moviesdesc");
  };

  const removeMovie = (id_) => {
    console.log(
      "Eliminar id: " + id_ + " Perteneciente a lista: " + idListaSel
    );
    // console.log(checkExists(idListaSel));
  };

  const renderLista = (item_) => (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: item_.imagen }} />
      </Left>
      <Body>
        <TouchableHighlight
          underlayColor="white"
          onPress={() => showMovie(item_.id)}
        >
          <View>
            <Text>{item_.title}</Text>
            <Text note numberOfLines={1}>
              {item_.overview}
            </Text>
          </View>
        </TouchableHighlight>
      </Body>
      <Right>
        <Button transparent>
          <Image
            source={require("../../../assets/eliminar.png")}
            style={styles.quitarIcon}
          />
        </Button>
      </Right>
    </ListItem>
  );

  return (
    <Container>
      <View style={styles.viewContainer}>
        <Text style={styles.tituloContainer}>Lista </Text>
        <Text style={styles.mensajeDomain}>
          Para compartir la lista con otros usuarios, puede cambiar la opción a
          Lista Pública
        </Text>
        <View style={styles.switchStyle}>
          <ToggleSwitch
            isOn={getDomainList()}
            onColor="green"
            offColor="gray"
            label={labelDomain()}
            labelStyle={styles.switchLabelStyle}
            size="large"
            onToggle={toggleDomain}
          />
        </View>
        <Divider style={{ backgroundColor: "black", marginBottom: 10 }} />
      </View>
      <Content styles={styles.contentStyle}>
        <List>{lista.map((m) => m.map((d) => renderLista(d)))}</List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
  },
  tituloContainer: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  mensajeDomain: {
    fontSize: 16,
    fontStyle: "italic",
    color: "blue",
  },
  switchStyle: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  switchLabelStyle: {
    color: "black",
    fontWeight: "900",
  },
  quitarIcon: {
    height: 20,
    width: 20,
  },
});
