import React from "react";
import Repositories from "../data/Repositories";
import { FlatList, Text, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import Constants from "expo-constants";

const RepositoryList = () => {
    return (
        <FlatList data={Repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}/>
            )}
            style={{ paddingTop: Constants.statusBarHeight, flex: 1}}
        /> 
    )
}

export default RepositoryList;