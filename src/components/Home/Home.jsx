import react from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import Constants from "expo-constants";
import { createStackNavigator } from '@react-navigation/stack';
import Chats from "../Chat/Chats";
import Profile from "../Profile/Profile";
import { MaterialIcons } from '@expo/vector-icons';



const Home = ({ navigation }) => {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, gap: 30, backgroundColor: "#186F65" }}>
            <View style={styles.containerButton}>
                <View style={styles.button1}>
                    <MaterialIcons name="support-agent" size={30} color="black" onPress={() => navigation.navigate('chat')} />
                </View>
                <View style={styles.button2}>
                    <Button title="Profile" color={'red'} />
                </View>
            </View>
            <View style={styles.Containerpromotions}>
                <ScrollView style={{ flex: 1, height: '100%'}} showsHorizontalScrollIndicator={false} horizontal={true}>
                    <View style={styles.Containerpromotions2}>
                        <View style={styles.promotions}>
                            <Text>hola</Text>
                        </View>
                        <View style={styles.promotions}>
                            <Text>hola</Text>
                        </View>
                        <View style={styles.promotions}>
                            <Text>hola</Text>
                        </View>
                        <View style={styles.promotions}>
                            <Text>hola</Text>
                        </View>
                        <View style={styles.promotions}>
                            <Text>hola</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View>
                <Text>
                    Hola
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        paddingRight: 20,
        gap: 10,
    },
    button1: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    button2: {
        width: 40,
        height: 40,
        backgroundColor: '#000',
        borderRadius: 8
    },
    Containerpromotions: {
        paddingHorizontal: 10,
        width: '100%',
        height: '13%',
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    Containerpromotions2: {
        paddingHorizontal: 2,
        width: '100%',
        height: '100%',
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    promotions: {
        paddingHorizontal: 2,
        backgroundColor: '#CDC6C4',
        height: '90%',
        width: 250,
        borderRadius: 8
    }

})

export default Home;