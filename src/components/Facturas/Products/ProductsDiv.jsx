import React from 'react';
import Repositories from "../../../data/Repositories";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { QRCode } from 'react-qrcode-logo';

const ProductsDiv = () => {

    const newjson = Repositories.reduce((acc, item) => {

        const existingItem = acc.find(e => e.nombre === item.fullName)

        if (existingItem) {
            existingItem.cant += 1;
            existingItem.monto += item.forksCount
        } else {
            acc.push({
                nombre: item.fullName,
                cant: 1,
                monto: item.forksCount,
            })
        }
        return acc;
    }, [])

    console.log(newjson);


    return (
        <View style={styles.container}>
            <FlatList data={newjson}
                ItemSeparatorComponent={() => <Text></Text>}
                renderItem={({ item: repo }) => (
                    <View style={styles.itemproducts}>
                        <View>
                            <Text style={styles.itemproductsTitle}>{repo.nombre}</Text>
                            <Text style={styles.monto}>${repo.monto}</Text>
                        </View>
                        <View style={styles.specification}>
                            <View style={styles.specificationCant}>
                                <Text style={{ color: "#7B34DC", fontSize: 16 }}>{repo.cant}</Text>
                            </View>
                            <View style={styles.specificationReport}>
                                <Text>!</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        gap: 5,
    },
    itemproducts: {
        flexDirection: 'row',
        flex: 1,
        width: "100%",
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: "#eeeeee",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 8
    },
    specification: {
        flexDirection: 'row',
        gap: 15,
        paddingRight: 15,
        alignItems: 'center',
    },
    itemproductsTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#7B34DC"
    },
    monto: {
        fontSize: 15,
        color: "gray"
    },
    specificationReport: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    specificationCant: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#eeeeee",
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default ProductsDiv;