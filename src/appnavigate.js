import React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './normal/splash';
import ParentScreen from './normal/parent';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} 
        options={{headerShown: false}} />
        <Stack.Screen name="Parent" component={ParentScreen} 
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator;