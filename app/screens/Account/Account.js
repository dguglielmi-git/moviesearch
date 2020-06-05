import React , {useState, useEffect} from 'react'
import {View, Text} from 'react-native'
import * as firebase from 'firebase'
import Loading from '../../components/Loading'
import UserGuest from './UserGuest'
import UserLogued from './UserLogued'


export default function Account () {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            // Puede devolver null = usuario no logueado
            // o puede devolver un objeto con los datos del usuario e indica que el usuario esta logueado
            !user ? setLogin(false) : setLogin(true);
        })
    },[])

    if (login === null) return <Loading isVisible={true} text="Cargando..." />
    return login ? <UserLogued /> : <UserGuest />;
}