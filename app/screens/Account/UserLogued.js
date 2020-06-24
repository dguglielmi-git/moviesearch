import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import Toast from "react-native-easy-toast";
import Loading from "../../components/Loading";
import InfoUser from "../../components/Account/InfoUser";
import AccountOptions from "../../components/Account/AccountOptions";

export default function UserLogued({setUserLogin, setUserName}) {
  const toastRef = useRef();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [reloadUserInfo, setReloadUserInfo] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user);
    })();
    setReloadUserInfo(false);
  }, [reloadUserInfo]);

  const cerrarSesion = () => {
    firebase.auth().signOut();
    setUserName('');
    setUserLogin(false);
  }

  return (
    <View style={styles.viewUserInfo}>
      {userInfo && (
        <InfoUser
          userInfo={userInfo}
          toastRef={toastRef}
          setLoading={setLoading}
          setLoadingText={setLoadingText}
        />
      )}

      <AccountOptions
        userInfo={userInfo}
        toastRef={toastRef}
        setReloadUserInfo={setReloadUserInfo}
      />

      <Button
        title="Cerrar Sesion"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionTest}
        onPress={cerrarSesion}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
      <Loading text={loadingText} isVisible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
  btnCloseSession: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10,
  },
  btnCloseSessionTest: {
    color: "#615DE7",
  },
});
