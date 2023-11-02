import React from "react";
import RepositoryList from "./src/components/RepositoryList";
import Test from "./src/components/Test";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Home from "./src/components/Home/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chats from "./src/components/Chat/Chats";
import ScannerQR from "./src/components/ScannerCode/ScannerQR";
import SelectMethod from "./src/components/Page/SelectMethod";
import PartesIguales from "./src/components/Facturas/PartesIguales";
import PagoCompleto from "./src/components/Facturas/PagoCompleto";
import PagoSelected from "./src/components/Facturas/PagoSelected";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


function AppBar() {
    return (
        <Tab.Navigator initialRouteName="Home"
            // activeColor="#fff"
            inactiveColor="#1F1717"
            barStyle={{ backgroundColor: '#7B34DC', height: "10%" }}
            screenOptions={{
                tabBarActiveTintColor: '#fff',
            }}
            tabBarOptions={{
                labelStyle: {
                    fontSize: 10, // <-- Aumenta el tamaño de las letras a 20px
                }
            }}>

            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: "Inicio",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" size={27} color={color}  />
                ),
                // tabBarBadge: 1,
                headerShown: false,
            }} />
            <Tab.Screen name='como' component={ScannerQR} options={{
                tabBarLabel: "QR",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="qrcode-scan" size={27} color={color} />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name='pago' component={Test} options={{
                tabBarLabel: "Pagos",
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="payment" size={27} color={color} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={AppBar} options={{ headerShown: false }} />
                <Stack.Screen name="chat" component={Chats} />
                <Stack.Screen name="SelectMethod" component={SelectMethod} options={{ title: "" }}/>
                <Stack.Screen name="partesiguales" component={PartesIguales} options={{ title: "" }}/>
                <Stack.Screen name="pagocompleto" component={PagoCompleto} options={{ title: "" }}/>
                <Stack.Screen name="pagoselected" component={PagoSelected} options={{ title: "" }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}