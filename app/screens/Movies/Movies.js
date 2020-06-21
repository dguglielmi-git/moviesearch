import React, { useState, useEffect } from "react";
import { RecipeCard } from "../../AppStyles";
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from "react-native";
import Modal from "../../components/Modal";
import { Item, Input } from "native-base";
import { Icon, Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import FiltersSearching from "./FiltersSearching";
import { getEstrenos, getMovie } from "../../controller/controllerApi";

export default function Movies() {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [estrenos, setEstrenos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [filterSelected, setFilterSelected] = useState("Peliculas");
  const [valueDropdown, setValueDropdown] = useState("");

  const clickModal = () => setIsVisible(!isVisible);

  const buscarEstrenosApi = async () => {
    let newEstrenos = await getEstrenos();
    setIsloading(false);
    setEstrenos(newEstrenos);
  };

  const buscarPelicula = async () => {
    let newPeliculas = await getMovie(search);
    setIsloading(false);
    setEstrenos(newPeliculas);
  };

  const onPressMovie = (item) => navigation.navigate("moviesdesc", { item });
  const updateSearch = (e) => setSearch(e.nativeEvent.text);
  const onSubmitSearch = () => buscarPelicula();

  useEffect(() => {
    buscarEstrenosApi();
  }, []);

  const renderEstrenos = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(204,204,204,0.02)"
      onPress={() => onPressMovie(item)}
      style={{ borderRadius: 25 }}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.imagen }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.release}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{ height: "100%" }}>
      <Item style={styles.itemStyle}>
        <Icon
          type="material-community"
          name="magnify"
          style={{ marginLeft: 10 }}
        />
        <Input
          placeholder="Search"
          onChange={updateSearch}
          onSubmitEditing={onSubmitSearch}
          style={styles.inputSearchStyle}
          rightIcon={{
            type: "material-community",
            name: "dots-vertical",
            color: "#c2c2c2",
          }}
        />
        <Icon
          type="material-community"
          name="dots-vertical"
          color="black"
          size={30}
          onPress={clickModal}
          iconStyle={{
            marginRight: 15,
          }}
        />
      </Item>

      <Divider backgroundColor="gray" style={{ marginTop: 10 }} />

      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={estrenos}
        renderItem={renderEstrenos}
        keyExtractor={(item) => `${item.id}`}
      />

      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <FiltersSearching
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
          setIsVisible={setIsVisible}
          valueDropdown={valueDropdown}
          setValueDropdown={setValueDropdown}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  container: RecipeCard.container,
  itemStyle: {
    marginTop: 10,
    borderRadius: 5,
    shadowRadius: 10,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  inputSearchStyle: {
    marginLeft: 10,
  },
});
