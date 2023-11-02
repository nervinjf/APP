import React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.svg'
import ProductsDiv from './Products/ProductsDiv';
import Repositories from "../../data/Repositories";


const PartesIguales = () => {

    let monto = 0;
    Repositories.forEach(e => {
        monto += e.forksCount
    });

    return (
        <View style={styles.container}>
            <View style={styles.navcontainer}>
                <View style={styles.titlenav}>
                    <View>
                        <Image source={Logo} style={styles.titlelogo} />
                    </View>
                    <View>
                        <Text style={styles.title}>Establecimiento</Text>
                        <Text style={styles.description}><Text style={styles.descriptionBold}>Nro. factura:</Text> xxxxxxxxxxx</Text>
                        <Text style={styles.description}><Text style={styles.descriptionBold}>Personas conectadas: </Text>X</Text>
                    </View>
                </View>
                <View style={styles.buttonnav}>
                    <View style={styles.containernav}>
                        <Button title='Calcel' color='gray' />
                    </View>
                </View>
            </View>
            <View style={styles.containergap}>
                <View style={styles.containeritems}>
                    <ProductsDiv />
                </View>
                <View style={styles.containerdescription}>
                    <View style={styles.containerdescriptionTitle}> 
                        <Text style={{ color: "gray", fontSize: 17, fontWeight: "600" }}>Subtotal</Text>
                        <Text style={{ color: "gray", fontSize: 17 }}>Service Charge</Text>
                        <Text style={{ color: "#7B34DC", fontSize: 17, fontWeight: "600"  }}>Total</Text>
                    </View>
                    <View style={styles.containerdescriptionMonto}>
                        <Text style={{ color: "gray", fontSize: 17, fontWeight: "600", textAlign: 'right'}}>${monto}</Text>
                        <Text style={{ color: "gray", fontSize: 17, textAlign: 'right' }}>$0.30</Text>
                        <Text style={{ color: "#7B34DC", fontSize: 17, fontWeight: "600", textAlign: 'right' }}>${monto + 0.30}</Text>
                    </View>
                </View>
                <View style={styles.containerButtonPagar}>
                    <TouchableOpacity style={styles.buttonPagar}><Text style={styles.textButtonPagar}>Pagar</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: "white",
        padding: "3%",

    },
    containergap:{
     gap: 20,
    },
    navcontainer: {
        width: "100%",
        height: "10%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
    },
    titlenav: {
        flexDirection: "row",
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlelogo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black"
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    },
    description: {
        fontSize: 12,
        color: "gray"
    },
    descriptionBold: {
        fontWeight: "600"
    },
    buttonnav: {
        paddingRight: 10,
        justifyContent: "center",
    },
    containernav: {
        width: "100%",
        height: "65%",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        margin: 0,
        color: "black"
    },
    containeritems:{
        height: "70%"
    },
    containerdescription: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: "12%",
    },
    containerdescriptionTitle:{
        gap: 8
    },
    containerdescriptionMonto:{
        gap: 8,
    },
    containerButtonPagar:{
        width: "100%",
        alignItems: "center",
    },
    buttonPagar:{
        width: "100%",
        height: 40,
        backgroundColor: "#7B34DC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textButtonPagar:{
        color: "white",
        fontWeight: "600",
        fontSize: 20
    }
})

export default PartesIguales;