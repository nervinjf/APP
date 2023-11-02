import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Chats from "./src/components/Chat/Chats";
import Profile from "./src/components/Profile/Profile";
import SelectMethod from './src/components/Page/SelectMethod';

const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={Chats} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SelectMethod" component={SelectMethod} />
      </Stack.Navigator>
    );
  }

export default function StackScreen(){
    return(
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>

    );
}