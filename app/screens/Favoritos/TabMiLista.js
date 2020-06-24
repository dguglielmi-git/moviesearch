import React, { useState, useEffect , useContext} from "react";
import * as firebase from "firebase";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NoLogged from "../../components/NoLogged";
import ListaPeliculas from "./ListaPeliculas";
import Loading from "../../components/Loading";
import {MyContext} from "../../hoc/MyContext";

const { width, height } = Dimensions.get("window");
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

export default function TabMiLista({
  userLogin,
  emailUser,
  setLista,
  setUserName,
  setEmailUser,
}) {
  const [miLista, setMiLista] = useState([]);
  const navigation = useNavigation();
  const [login, setLogin] = useState(null);
  const {num } = useContext(MyContext);
  console.log(num);
  const listaprivada = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa27f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2xd72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adx3abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbx91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-105571e29d72",
      title: "Third Item",
    },
  ];

  // Esta lista es la que se le pasa como parametro al visor del contenido de
  //las ListaPeliculas
  const lista = [
    {
      id: 419704,
      title: "Ad Adstra",
      imagen: "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      overview:
        "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    },
    {
      id: 419704,
      title: "Ad Adstra",
      imagen: "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      overview:
        "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
    },
  ];
  const cargarLista = async () => {
    setMiLista(listaprivada);
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // Puede devolver null = usuario no logueado
      // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
      !user ? setLogin(false) : setLogin(true);
    });
    console.log("Current USER: " + firebase.auth().currentUser);

    cargarLista();
  }, []);

  const onPressLista = (item) => {
    console.log(item);
    setLista(lista);
    navigation.navigate("showList");
  };

  const renderLista = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(204,204,204,0.02)"
      onPress={() => onPressLista(item)}
      style={{ borderRadius: 25 }}
    >
      <View style={styles.container}>
        <Text style={styles.tituloLista}>Titulo Lista</Text>
        <Text style={styles.descripcionLista}>Descripción de la lista.</Text>
      </View>
    </TouchableHighlight>
  );
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
          <TouchableHighlight>
            <Image
              source={require("../../../assets/anadir.png")}
              style={styles.imgBotonAgregar}
            />
          </TouchableHighlight>
        </View>
   

        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={miLista}
          renderItem={renderLista}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    alignItems: "center",
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
  botonAgregar: {
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
  imgBotonAgregar: {
    height: 30,
    width: 30,
  },
  tituloLista: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descripcionLista: {
    fontSize: 15,
  },
  container: {
    width: SCREEN_WIDTH - 70,
    borderWidth: 0.1,
    borderColor: "#63769C",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 90,
    padding: 5,
    marginTop: 10,
    backgroundColor: "#C4D6FB",
    shadowColor: "#63769C",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },
});
