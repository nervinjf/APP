import React from "react"
import { View, StyleSheet, Image } from 'react-native'
import StyledText from "./StyledText"
import RepositoryStats from './RepositoryStats'
import theme from "../theme"

const RepositoryItemheader = ({ ownerAvatarUrl, fullName, description, language }) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2, flex: 1}}>
        <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <StyledText fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='secondary' >{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
)
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemheader {...props} />
        <RepositoryStats {...props} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        padding: '4',
        color: theme.color.white,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        padding: 5,
        borderRadius: 4,
        overflow: "hidden",
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem