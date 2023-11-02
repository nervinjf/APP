import React, { useState } from 'react';
import Repositories from "../../../data/Repositories";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const ProductsSelect = () => {

    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <View style={styles.container}>
            <FlatList data={Repositories}
                ItemSeparatorComponent={() => <Text></Text>}
                renderItem={({ item: repo }) => (
                    <View style={styles.itemproducts}>
                        <View style={styles.itemproductsFirst}>
                            <View>
                                <BouncyCheckbox onPress={() => setCheckboxState(!checkboxState)} 
                                fillColor="#7B34DC"
                                size={30}
                                />
                            </View>
                            <View>
                                <Text style={styles.itemproductsTitle}>{repo.fullName}</Text>
                                <Text style={styles.monto}>${repo.forksCount}</Text>
                            </View>
                        </View>
                        <View style={styles.specification}>
                            <View style={styles.specificationCant}>
                                <Text style={{ color: "#7B34DC", fontSize: 16 }}>1</Text>
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
    },
    itemproductsFirst:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})


export default ProductsSelect;