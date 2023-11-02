import react from "react";
import { View, Text } from 'react-native'
import Constants from "expo-constants";

const Profile = () => {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
            <Text>
                Profile
            </Text>
        </View>
    );
}



export default Profile;