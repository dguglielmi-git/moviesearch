import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  FlatList,
} from "react-native";
import { Divider } from "react-native-elements";
import { MyContext } from "../../hoc/MyContext";
import ToggleSwitch from "toggle-switch-react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Button } from "native-base";
import { getMovieByID } from "../../controller/controllerApi";

export default function ListaPeliculas() {
  const [domainList, setDomainList] = useState(false);
  const {
    setItem,
    idListaSel,
    changeDomainList,
    listasPrivadas,
    deleteMovieList,
    getPrivateLists,
    updateListaPriv,
    setUpdateListaPriv,
  } = useContext(MyContext);
  const [listado, setListado] = useState([]);
  const [descLista, setDescLista] = useState("");

  const toggleDomain = () => {
    setDomainList(!domainList);
    let id = idListaSel;
    changeDomainList(id, domainList);
  };

  const labelDomain = () => (domainList ? "Lista Pública" : "Lista Privada");

  const cargarPeliculas = async () => {
    await getPrivateLists();
    setListado([]);
    listasPrivadas.forEach((l) => {
      if (l.id === idListaSel) {
        setListado(l.items);
        setDescLista(l.desc);
        setDomainList(!l.privado);
      }
    });
  };

  useEffect(() => {
    cargarPeliculas();
    if (updateListaPriv) {
      cargarPeliculas();
      setUpdateListaPriv(false);
    }
  }, [updateListaPriv]);

  return (
    <Container>
      <View style={styles.viewContainer}>
        <Text style={styles.tituloContainer}>Lista </Text>
        <Text style={styles.mensajeDomain}>{descLista}</Text>
        <View style={styles.switchStyle}>
          <ToggleSwitch
            isOn={domainList}
            onColor="green"
            offColor="gray"
            label={labelDomain()}
            labelStyle={styles.switchLabelStyle}
            size="medium"
            onToggle={() => toggleDomain()}
          />
        </View>
        <Divider style={{ backgroundColor: "black", marginBottom: 10 }} />
      </View>
      <Content styles={styles.contentStyle}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={listado}
          renderItem={(datos) => (
            <ListadoPeliculas
              datos={datos}
              setItem={setItem}
              deleteMovieList={deleteMovieList}
              listado={listado}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
    </Container>
  );
}

function ListadoPeliculas(props) {
  const {
    datos,
    setItem,
    deleteMovieList,
    listado,
  } = props;
  const { id, imagen, overview, title, items } = datos.item;
  const navigation = useNavigation();
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

  const removeMovie = (idMovie) => {
    const aux = listado;
    const newArray = [];

    aux.map((lis) => {
      if (lis.id !== idMovie) {
        newArray.push(lis);
      }
    });
    deleteMovieList(newArray);
    console.log("Eliminada la pelicula");
  };

  useEffect(() => {
    console.log("Items: " + items);
  }, []);

  return (
    <View>
      <TouchableHighlight underlayColor="white" onPress={() => showMovie(id)}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image style={styles.imagenPelicula} source={{ uri: imagen }} />
          </View>
          <View style={styles.titleContainer}>
            <Text note numberOfLines={2} style={styles.titleMovie}>
              {title}
            </Text>

            <Text note numberOfLines={3} style={styles.overview}>
              {overview}
            </Text>
          </View>
          <View>
            <Button transparent onPress={() => removeMovie(id)}>
              <Image
                source={require("../../../assets/eliminar.png")}
                style={styles.quitarIcon}
              />
            </Button>
          </View>
        </View>
      </TouchableHighlight>
    </View>
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
    fontSize: 18,
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
  titleContainer: {
    height: 100,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    marginBottom: 10,
  },
  titleMovie: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    width: 260,
  },
  imagenPelicula: {
    height: 80,
    width: 80,
    alignContent: "center",
    marginLeft: 5,
  },
  overview: {
    width: 260,
    marginRight: 10,
    marginLeft: 5,
  },
});
