import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { CheckBox, Button, Divider } from "react-native-elements";

export default function FiltersSearching({
  filterSelected,
  setFilterSelected,
  setIsVisible,
  valueDropdown,
  setValueDropdown
}) {
  const refDropDown = useRef();
  const refTvElement = useRef();
  const refPelElement = useRef();
  const [dataFiltros, setDataFiltros] = useState([]);
  const [radioSelected, setRadioSelected] = useState("");

  let dataTv = [
    {
      value: "TV_Estrenos",
    },
    {
      value: "TV_Populares",
    },
    {
      value: "TV_Pear",
    },
  ];

  let dataPeliculas = [
    {
      value: "Estrenos",
    },
    {
      value: "Populares",
    },
    {
      value: "Pear",
    },
  ];

  useEffect(() => {
    filterSelected === "TV"
      ? setDataFiltros(dataTv)
      : setDataFiltros(dataPeliculas);
    setRadioSelected(filterSelected);
  }, []);

  const checkStatus = (ee) => ee === radioSelected;

  const clickSelec = (ref) => {
    const sel = ref.current.props.title;
    setRadioSelected(sel);
    setFilterSelected(sel);
    sel === "TV" ? setDataFiltros(dataTv) : setDataFiltros(dataPeliculas);
    setValueDropdown("");
  };

  const onChangeDropDownHandler = (val) => setValueDropdown(val);

  const closeModal = () => setIsVisible(false);

  return (
    <View>
      <View style={styles.title}>
        <Image
          source={require("../../../assets/filtrar.png")}
          style={{ height: 25, width: 25 }}
        />
        <Text style={styles.textTitle}>Filtros</Text>
      </View>

      <Divider backgroundColor="gray" style={{ marginTop: 10 }} />

      <View style={styles.viewCheckboxContainers}>
        <View style={styles.checkStyle}>
          <CheckBox
            title="TV"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checkStatus("TV")}
            ref={refTvElement}
            containerStyle={styles.containerCheck}
            onPress={() => clickSelec(refTvElement)}
          />
        </View>
        <View style={styles.checkStyle}>
          <CheckBox
            title="Peliculas"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checkStatus("Peliculas")}
            ref={refPelElement}
            containerStyle={styles.containerCheck}
            onPress={() => clickSelec(refPelElement)}
          />
        </View>
      </View>

      <Dropdown
        ref={refDropDown}
        label="Filtrar por:"
        data={dataFiltros}
        onChangeText={(e) => onChangeDropDownHandler(e)}
        value={valueDropdown}
      />

      <View style={styles.buttonViewStyle}>
        <Button title="Cerrar" onPress={closeModal} buttonStyle={styles.buttonStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    flexDirection: "row",
  },
  viewCheckboxContainers: {
    flexDirection: "row",
    width: "100%",
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#496BC9",
  },
  buttonViewStyle: {
    width: '100%',
    marginBottom:10,
    marginTop:10,
    justifyContent:'center',
    flexDirection: "row",
  },
  buttonStyle: {
    width: 120,
    backgroundColor: '#3E5EE0'
  },
  checkStyle: {
    width: 130,
    margin: 10,
  },
  containerCheck: {
    backgroundColor: "white",
    borderColor: "white",
  },
});
