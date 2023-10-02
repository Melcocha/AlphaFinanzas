import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screens/HomeScreen';
import IncomesScreen from '../../screens/IncomesScreen';
import StackScreen from '../../screens/StackScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import ExpensesScreen from '../../screens/ExpensesScreen';

const HomeStackNavigator = createNativeStackNavigator();

function Stack() {
  return(
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
      name="Ingresos"
      component={IncomesScreen}
      options={{headerShown:false, animation:"none"}}
      />
        <HomeStackNavigator.Screen
      name="Gastos"
      component={ExpensesScreen}
      options={{headerShown:false, animation:"none"}}
      />
    </HomeStackNavigator.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#27374D",
          width: 300,
        },
        headerStyle: {
          backgroundColor: "#27374D",
          height: 60,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "regular",
          fontSize: 25,
        },
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          color: "#FFF",
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Movimientos" component={Stack} />
      <Drawer.Screen name="Stack" component={StackScreen} />
    </Drawer.Navigator>
  );
}
