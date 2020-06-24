import React, { useState, useEffect } from "react";
import UserGuest from "./UserGuest";
import * as firebase from "firebase";
import UserLogued from "./UserLogued";
import Loading from "../../components/Loading";

export default function Account({ setUserLogin, userName, setUserName }) {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // Puede devolver null = usuario no logueado
      // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
      !user ? setLogin(false) : setLogin(true);
    });
    setUserLogin(login);
  }, []);

  if (login === null) return <Loading isVisible={true} text="Cargando..." />;
  return login ? (
    <UserLogued setUserLogin={setUserLogin} setUserName={setUserName} />
  ) : (
    <UserGuest />
  );
}
