import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import StyledText from "../StyledText";
import Constants from "expo-constants";
import theme from "../../theme";
import { Camera, CameraType } from 'expo-camera';
import { BarCodeScanner } from "expo-barcode-scanner";

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    layerCenter: {
        flex: 2,
        backgroundColor: opacity,
        justifyContent: "center",
        alignItems: "center",
        gap: 70
    },
    box: {
        width: '80%',
        height: "50%",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10
    },
    containerffff: {
        color: "#fff",
        fontSize: 20
        
    },
    again:{
        justifyContent:"center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    againbutton:{
        backgroundColor: "#fff",
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex:2
    }
});


const ScannerQR = ({ navigation }) => {

    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        console.log("escaneado")
        navigation.navigate('SelectMethod',  {user: 'jane' })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <BarCodeScanner
            // onBarCodeScanned={(scan) => alert(scan.data)}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={[StyleSheet.absoluteFill, styles.container]}
            barCodeTypes={BarCodeScanner}
        >
            {scanned && <View style={styles.again}><View style={styles.againbutton}><Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} /></View></View>}
            <View style={styles.layerCenter}>
                <View>
                    <Text style={styles.containerffff}>
                        Enfoca el codigo QR en el recuadro
                    </Text>
                </View>
                <View style={styles.box} />
            </View>
            <View style={styles.layerBottom} />
        </BarCodeScanner>

    );
};

export default ScannerQR;