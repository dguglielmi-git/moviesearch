import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Header, Tab, Tabs, TabHeading, Icon } from "native-base";
import TabMiLista from "./TabMiLista";
import TabListaOtros from './TabListaOtros'
import TabGeneros from './TabGeneros'

export default function Favorites() {
  return (
    <Container>
      <Tabs>
        <Tab
         
          heading={
            <TabHeading>
              <Icon name="film" style={styles.icon}/>
              <Text style={styles.titulosML}>Mis Listas</Text>
            </TabHeading>
          }
        >
          <TabMiLista />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="film" style={styles.icon} />
              <Text style={styles.titulos}>Listas Públicas</Text>
            </TabHeading>
          }
        >
          <TabListaOtros />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text style={styles.titulos}>Generos Favoritos</Text>
            </TabHeading>
          }
        >
          <TabGeneros />
        </Tab>
      </Tabs>
      </Container>
  );
}

const styles = StyleSheet.create({
  titulos: {
    color: "white",
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    width: 110
  },
  titulosML: {
    color: "white",
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    width: 60
  },
  icon: {
 
  },
});
