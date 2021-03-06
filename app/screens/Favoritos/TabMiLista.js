import React, { useState, useEffect, useContext, useRef } from "react";
import * as firebase from "firebase";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import Loading from "../../components/Loading";
import { MyContext } from "../../hoc/MyContext";
import NoLogged from "../../components/NoLogged";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";

const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function TabMiLista() {
  const [miLista, setMiLista] = useState([]);
  const navigation = useNavigation();
  const [login, setLogin] = useState(null);
  const [user, setUser] = useState([]);
  const toastRefOk = useRef();
  const {
    setLista,
    setIdListaSel,
    listasPrivadas,
    getPrivateLists,
    updateListaPriv,
    setUpdateListaPriv,
    deleteList,
    tstListUpdated,
    setTstListUpdated,
  } = useContext(MyContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // Puede devolver null = usuario no logueado
      // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
      !user ? setLogin(false) : setLogin(true);
      user && setUser(user);
      if (tstListUpdated) {
        toastRefOk.current.show("Se ha eliminado la lista seleccionada.", 3000);
        setTstListUpdated(false);
      }
    });
    getPrivateLists();
  }, [tstListUpdated]);

  const findById = (id) => {
    let result = [];
    for (let i = 0; i < miLista.length; i++) {
      if (miLista[i].id === id) {
        result.push(miLista[i].items);
      }
    }
    return result;
  };

  const onPressLista = (item_) => {
    let res = findById(item_);
    setLista(res);
    setIdListaSel(item_);

    // El elemento 'lista' debe ser un subitem de listaprivada
    // que contenga el array con las peliculas favoritas
    navigation.navigate("showList");
  };

  const agregarList = () => {};

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;

  return !login ? (
    <NoLogged />
  ) : (
    <View style={styles.mainContainer}>
      <View style={{ alignSelf: "center" }}>
        <Image
          source={require("../../../assets/img/folder.png")}
          style={styles.Imagen}
        />
        <Text style={styles.tituloGeneros}>Mis Listas</Text>
      </View>
      <View style={styles.botonAgregar}>
        <TouchableHighlight onPress={agregarList}>
          <Image
            source={require("../../../assets/anadir.png")}
            style={styles.imgBotonAgregar}
          />
        </TouchableHighlight>
      </View>
      <Toast
        ref={toastRefOk}
        position="top"
        opacity={0.9}
        style={styles.toastOk}
      />

      {updateListaPriv ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        listasPrivadas && (
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={1}
            data={listasPrivadas}
            renderItem={(datos) => (
              <ListaPrivada
                datos={datos}
                setIdListaSel={setIdListaSel}
                setUpdateListaPriv={setUpdateListaPriv}
                deleteList={deleteList}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )
      )}
    </View>
  );
}

function ListaPrivada(props) {
  const { datos, setIdListaSel, setUpdateListaPriv, deleteList } = props;
  const { desc, id, items, privado, title, usuario } = datos.item;
  const navigation = useNavigation();

  const onPressLista = (id) => {
    console.log(id);
    setIdListaSel(id);
    navigation.navigate("showList");
  };

  const eliminarLista = (id) => {
    setUpdateListaPriv(true);
    deleteList(id);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        underlayColor="rgba(204,204,204,0.02)"
        onPress={(items) => onPressLista(id)}
        style={{ borderRadius: 25 }}
      >
        <View style={styles.container}>
          <Image
            source={require("../../../assets/cine.png")}
            style={styles.imgCine}
          />
          <View>
            <View>
              <Text style={styles.tituloLista}>{title}</Text>
            </View>
            <Text style={styles.descripcionLista}>{desc}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => eliminarLista(id)}
        underlayColor="rgba(204,204,204,0.02)"
        style={{ borderRadius: 25 }}
      >
        <Image
          source={require("../../../assets/eliminar.png")}
          style={styles.quitarIcon}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#E2E3E5",
  },
  tituloGeneros: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  Imagen: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  quitarIcon: {
    height: 25,
    width: 25,
    marginTop: 25,
  },
  botonAgregar: {
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  imgCine: {
    height: 30,
    width: 30,
    marginTop: 5,
    marginRight: 10,
  },
  imgBotonAgregar: {
    height: 30,
    width: 30,
  },
  tituloLista: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  descripcionLista: {
    fontSize: 15,
  },
  container: {
    width: SCREEN_WIDTH - 60,
    borderWidth: 0.1,
    borderColor: "#63769C",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 60,
    padding: 5,
    marginTop: 10,
    backgroundColor: "#F3F4F8",
    shadowColor: "#63769C",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    flexDirection: "row",
  },
  toastOk: {
    backgroundColor: "#C41F01",
  },
});
