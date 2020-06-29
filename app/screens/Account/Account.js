import React, { useState, useEffect, useContext } from "react";
import * as firebase from "firebase";
import UserLogued from "./UserLogued";
import Loading from "../../components/Loading";
import { MyContext } from "../../hoc/MyContext";
import Login from './Login'

export default function Account() {
  const [login, setLogin] = useState(null);
  const {userLogin, setUserLogin, checkLogin} = useContext(MyContext);

  useEffect(() => {
    !checkLogin ? setLogin(false) : setLogin(true);
    firebase.auth().onAuthStateChanged((user) => {
      // Puede devolver null = usuario no logueado
      // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
      !user ? setUserLogin(false) : setUserLogin(true);
    });
  }, []);

  if (userLogin === null) return <Loading isVisible={true} text="Cargando..." />;
  return userLogin ? <UserLogued /> : <Login />;
}
