import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View, Button} from 'react-native'
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import RepositoryList from "./RepositoryList";
import Test from "./Test";
import { BarCodeScanner } from 'expo-barcode-scanner'

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft:10,
    },
    text:{
        color: theme.appBar.textPrimary
    }
})

const AppBar = () =>{

    const [ hasPermission, setHasPermission ] = React.useState(false);
    const [ scanData, setScanData ] = React.useState();

    useEffect(() => {
      (async() =>{
        const {status} = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      });  
    }, [])

    if (!hasPermission) {
        return (
            <View>
                <Text>Please grant camera permission to app.</Text>
            </View>
        )
    }

    const handleBarCodeScanned = ({type, data}) =>{
        setScanData(data)
        console.log(`Data: ${data}`)
        console.log(`Type: ${type}`)
    };

    return(
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
                <BarCodeScanner 
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
                />
                {scanData && <Button  title="Scan Again?" onPress={() => setScanData(undefined)}/>}
            </StyledText>
        </View>

    )
}

export default AppBar