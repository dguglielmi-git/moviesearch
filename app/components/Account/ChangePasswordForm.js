import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Input, Button} from 'react-native-elements'

export default function ChangePasswordForm(){
    return (
        <View styles={styles.view}>
            <Input placeholder="Contraseña Actual"
            containerStyle={styles.input}
            password={true}
            secureTextEntry={true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
            }}/>
            <Input 
            placeholder="Nueva Contraseña"
            containerStyle={styles.input}
            password={true}
            secureTextEntry={true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
            }}/>
            <Input 
            placeholder="Repetir Nueva Contraseña"
            containerStyle={styles.input}
            password={true}
            secureTextEntry={true}
            rightIcon={{
                type: "material-community",
                name: "eye-outline",
                color: "#c2c2c2",
            }}/>
            <Button 
            title="Container Styles"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn} />
        </View>

 );
}

const styles = StyleSheet.create({
    view: {
        alignItems:"center",
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
    btnContainer: {
        marginTop: 20,
        width: "95%",
    },
    btn: {
        backgroundColor: "#615DE7",
    }
});