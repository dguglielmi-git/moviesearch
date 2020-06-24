import React from "react";
import { View, Text, StyleSheet } from "react-native";
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

export default function ListaPeliculas({ lista, setItem }) {
  const navigation = useNavigation();

  const showMovie = async function (id) {
    let res = [];
    res = await getMovieByID(id);
    setItem(res);
    navigation.navigate("moviesdesc");
  };

  const renderLista = (item) => (
    <ListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: item.imagen }} />
      </Left>
      <Body>
        <Text>{item.title}</Text>
        <Text note numberOfLines={1}>
          {item.overview}
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text onPress={() => showMovie(item.id)}>View</Text>
        </Button>
      </Right>
    </ListItem>
  );

  return (
    <Container>
      <Header />
      <Content>
        <List>{lista.map((it, key) => renderLista(it))}</List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({});
