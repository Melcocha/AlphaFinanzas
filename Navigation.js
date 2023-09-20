import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const tab = createBottomTabNavigator();

function Mytabs() {
    return (
        <tab.Navigator initialRouteName="Home">
            
            <tab.Screen 
                name ="Home" 
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({color,size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <tab.Screen name ="Settings" component={SettingsScreen}/>
        </tab.Navigator>
        
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Mytabs/>
        </NavigationContainer>
    );
}