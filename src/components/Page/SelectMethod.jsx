import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native'
import pagaconamigos from '../../../assets/pagaconamigos.png'
import paga from '../../../assets/paga.jpg'
import pagaloquecomes from '../../../assets/pagaloquecomes.jpg'

const SelectMethod = ({ route, navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity  style={styles.boxSelect} onPress={() => navigation.navigate('pagocompleto')}><Image style={styles.img} source={pagaconamigos}  /><Text style={styles.textImage} >Paga aqui</Text></TouchableOpacity >
            <TouchableOpacity style={styles.boxSelect} onPress={() => navigation.navigate('partesiguales')}><Image style={styles.img} source={paga} /><Text style={styles.textImage2} >Partes iguales</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boxSelect} onPress={() => navigation.navigate('pagoselected')}><Image style={styles.img} source={pagaloquecomes}/><Text style={styles.textImage2}>Paga lo que comes</Text></TouchableOpacity>
        </View>
    );
};

export default SelectMethod;


const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 50,
    },
    boxSelect:{
        width: "80%",
        height: "17%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10
    },
    img:{
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    textImage:{
        position: "absolute",
        fontWeight: "600",
        fontSize: 35,
        color: "#fff",
        bottom: 0,
        left: 10
    },
    textImage2:{
        position: "absolute",
        fontWeight: "600",
        fontSize: 35,
        color: "#000",
        bottom: 0,
        left: 10,
    }
})