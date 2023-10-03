
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import IncomesScreen from '../../screens/IncomesScreen';
import StackScreen from '../../screens/StackScreen';
import ExpensesScreen from '../../screens/ExpensesScreen';
import CategoriaScreen from '../../screens/CategoriaScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AjusteScreen from '../../screens/AjusteScreen';
import AcercaScreen from '../../screens/Acerca';
import AñadirTransaccionScreen from '../../screens/AñadirTransaccionScreen';
import { NavigationContainer } from "@react-navigation/native";


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
      <HomeStackNavigator.Screen
        name="AñadirTransaccion" // Cambia el nombre a "AñadirTransaccion"
        component={AñadirTransaccionScreen}
        options={{ headerShown: false, animation: "none" }}
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
          height: 100,
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
      <Drawer.Screen name="Inicio" component={HomeScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="home" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Movimientos" component={Stack} options={{drawerIcon: ({ color, size }) => (<Icon name="exchange" color="white" size={size} /> ),}}/> 
      <Drawer.Screen name="Stack" component={StackScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="stack-exchange" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Categorias" component={CategoriaScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="th-large" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Ajustes" component={AjusteScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="briefcase" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Acerca De" component={AcercaScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="comment-o" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Cerrar Sesión" component={CategoriaScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="sign-in" color="white" size={size} /> ),}}/>

    </Drawer.Navigator>
  );
}
