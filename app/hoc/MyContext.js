import React, { useState, createContext } from "react";
import "firebase/firestore";
import { size } from "lodash";
import * as firebase from "firebase";
import { firebaseApp } from "../utils/firebase";

export const MyContext = createContext();

const db = firebase.firestore(firebaseApp);

const MyContextProvider = (props) => {
  // Navigation
  const [userLogin, setUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [resInsert, setResInsert] = useState(false);

  //FavoritesStack
  const [item, setItem] = useState([]);
  const [lista, setLista] = useState([]);
  const [idListaSel, setIdListaSel] = useState("");
  const [updateListaPriv, setUpdateListaPriv] = useState(false);
  const [tstListUpdated, setTstListUpdated] = useState(false);

  //---- nuevas modificaciones
  const [listasPrivadas, setListasPrivadas] = useState([]);
  const [listasPublicas, setListasPublicas] = useState([]);
  const [privateLists, setPrivateLists] = useState([]);

  // Comentarios
  const [comentarios, setComentarios] = useState([]);
  const [sinComentario, setSinComentarios] = useState(false);

  const listaprivada = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa27f63",
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2xd72",
      title: "Colección Ciencia Ficción",
      desc: "las mejores peliculas de ciencia ficción",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adx3abb28ba",
      title: "Pelis 80'",
      desc: "Las mejores peliculas retro",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
  ];
  const listaprivada2 = [
    {
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Colección Ciencia Ficción",
      desc: "las mejores peliculas de ciencia ficción",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Pelis 80'",
      desc: "Las mejores peliculas retro",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
  ];

  const listapublica = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa27f63",
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e2xd72",
      title: "Colección Ciencia Ficción",
      desc: "las mejores peliculas de ciencia ficción",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adx3abb28ba",
      title: "Pelis 80'",
      desc: "Las mejores peliculas retro",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53xxx28ba",
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "3ac68afc-c605-48d3-axf8-fbd91aa27f63",
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "58694a0f-3da1-471f-bd9x-145571e2xd72",
      title: "Colección Documentales",
      desc: "los mejores documentales Discovery Channel",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      id: "bx7acbea-c1b1-46c2-aed5-3adx3abb2xxx",
      title: "Disney'",
      desc: "Lo mejor de Disney",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
  ];

  const listapublica2 = [
    {
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Colección Ciencia Ficción",
      desc: "las mejores peliculas de ciencia ficción",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Pelis 80'",
      desc: "Las mejores peliculas retro",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Peliculas Acción",
      desc: "Listado de peliculas de Acción favoritas",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Pelis Terror",
      desc: "Colección de peliculas de terror favoritas",
      usuario: "",
      private: false,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Colección Documentales",
      desc: "los mejores documentales Discovery Channel",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
    {
      title: "Disney'",
      desc: "Lo mejor de Disney",
      usuario: "",
      private: true,
      items: [
        {
          id: 419704,
          title: "Ad Adstra",
          imagen:
            "https://image.tmdb.org/t/p/w200/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
          overview:
            "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        },
        {
          id: 475430,
          title: "Artemis Fowl",
          imagen:
            "https://image.tmdb.org/t/p/w200/mhDdx7o7hhrxrikq8aqPLLnS9w8.jpg",
          overview:
            "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
        },
      ],
    },
  ];

  const getPublicLists = async () => {
    const resPL = [];

    db.collection("listas")
      .where("privado", "==", false)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const listas = doc.data();
          listas.id = doc.id;
          resPL.push(listas);
        });
        setListasPublicas(resPL);
      });
  };

  // Trae Listas
  const getPrivateLists = async () => {
    const user = await firebase.auth().currentUser;
    const userid = user.uid;
    const resPL = [];

    db.collection("listas")
      .where("usuario", "==", userid)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const listas = doc.data();
          listas.id = doc.id;
          resPL.push(listas);
        });
        setListasPrivadas(resPL);
      });
  };

  const getPrivateListsByID = async (id__) => {
    const resPL = [];

    db.collection("listas")
      .doc(id__)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const listas = doc.data();
          listas.id = doc.id;
          resPL.push(listas);
        });
        setPrivateLists(resPL);
      });
  };

  //version final
  const getComentario = (id_) => {
    const resCC = [];
    setSinComentarios(false);
    db.collection("comentarios")
      .where("id_pelicula", "==", id_)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          const comments = doc.data(); //  .data() : Nos entrega solamente el objeto con los datos de firestore
          comments.id = doc.id; //  .id     : Nos devuelve el id autogenerado del comentario
          resCC.push(comments);
        });
        setComentarios(resCC);
        if (size(resCC) === 0) {
          setSinComentarios(true);
        }
      });
  };

  const newList = (nameNewList) => {
    db.collection("listas")
      .add(nameNewList)
      .then(() => {
        console.log("Ok");
      })
      .catch(() => {
        console.log("Error al insertar comentario.");
      });
  };

  // Inserta comentario en la base
  const addComentario = (
    idMovie_,
    idUsuario_,
    displayName_,
    comentario_,
    imagen_,
    email_,
    votacion_
  ) => {
    db.collection("comentarios")
      .add({
        id_pelicula: idMovie_,
        id_usuario: idUsuario_,
        nombre: displayName_,
        email: email_,
        comentario: comentario_,
        imagen: imagen_,
        votacion: votacion_,
        fechavoto: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setResInsert(true);
        console.log("Comentario insertado");
      })
      .catch((e) => {
        console.log("Error al insertar comentario." + e);
      });
  };

  // Cambia el dominio de una lista de Publica a Privada
  const changeDomainList = (idlista_, newDomain) => {
    db.collection("listas").doc(idlista_).update({
      privado: newDomain,
    });
  };

  const deleteMovieList = (newArray) => {
    console.log("Buscando lista: " + idListaSel);
    //Pisamos el array "items" con el nuevo array
    db.collection("listas").doc(idListaSel).update({
      items: newArray,
    });
  };

  const addNewMovieToList = (newMovie, idListaElegida) => {
    let aux = [];
    let newA = [];

    db.collection("listas")
      .doc(idListaElegida)
      .get()
      .then((response) => {
        aux = response.data();
        newA = aux.items;
        newA.push(newMovie);
        db.collection("listas").doc(idListaElegida).update({
          items: newA,
        });
      });
  };

  const getDomainList = () => {
    let result = false;
    listaprivada.map((m) => {
      if (m.id === idListaSel) {
        result = m.private;
      }
    });
    return result;
  };

  // Busca ID de lista por el nombre
  const findIdByName = (name_) => {
    let resul = "";
    listaprivada.map((m) => {
      if (m.title === name_) {
        resul = m.id;
      }
    });
    return resul;
  };

  // Devuelve los nombres de las listas
  const getNamesSelectedList = () => {
    let resul = [];
    listaprivada.map((m) => console.log(m.title));
  };

  const deleteList = (id) => {
    db.collection("listas")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Lista borrada");
        getPrivateLists().then(() => {
          console.log("Listas privadas actualizadas");
          setUpdateListaPriv(false);
          setTstListUpdated(true);
        });
      })
      .catch(() => {
        console.log("Error al borrar la lista");
      });
  };
  //Login check
  const checkLogin = () => {
    firebase.auth().onAuthStateChanged((user) => {
      // Puede devolver null = usuario no logueado
      // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
      !user ? setUserLogin(false) : setUserLogin(true);
    });
    return userLogin;
  };

  const cerrarSesion = () => {
    firebase.auth().signOut();
    setUserName("");
    setUserLogin(false);
  };

  // Chequea si existe un ID de Pelicula en una Lista privada
  const checkExists = (idlistapriv, idPeli) => {
    let resul = false;
    listaprivada.map((lp) => {
      if (lp.id === idlistapriv) {
        lp.items.map((item) => {
          if (item.id === idPeli) {
            resul = true;
          }
        });
      }
    });

    return resul;
  };

  // funcion de agregar a lista de favoritos
  const addFavorito = (idlistapriv, addPeli) => {
    // Verifica que la pelicula no exista y si s asi, agregarla.
    if (!checkExists(idlistapriv, addPeli.id)) {
      listaprivada.map((lp) => {
        if (lp.id === idlistapriv) {
          lp.items.push(addPeli);
          // Aca se inserta la llamada al insert de la subcollection en firestore
        }
      });
    }
  };

  return (
    <MyContext.Provider
      value={{
        userLogin,
        userName,
        emailUser,
        setUserLogin,
        setUserName,
        setEmailUser,
        lista,
        setLista,
        listaprivada,
        item,
        setItem,
        checkLogin,
        cerrarSesion,
        idListaSel,
        setIdListaSel,
        checkExists,
        addFavorito,
        getNamesSelectedList,
        findIdByName,
        changeDomainList,
        getDomainList,
        listapublica,
        addComentario,
        resInsert,
        setResInsert,
        comentarios,
        setComentarios,
        getComentario,
        sinComentario,
        listasPrivadas,
        setListasPrivadas,
        getPrivateLists,
        deleteMovieList,
        addNewMovieToList,
        getPrivateListsByID,
        privateLists,
        newList,
        listasPublicas,
        setListasPublicas,
        getPublicLists,
        updateListaPriv,
        setUpdateListaPriv,
        deleteList,
        tstListUpdated,
        setTstListUpdated,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContextProvider;
