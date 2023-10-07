
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import StackScreen from '../../screens/StackScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AjusteScreen from '../../screens/AjusteScreen';
import AcercaScreen from '../../screens/Acerca';
import AñadirTransaccionScreen from '../../screens/AñadirTransaccionScreen';
import MoviGastosScreen from '../../screens/MoviGastosScreen';
import MoviIngreScreen from '../../screens/MoviIngreScreen';
import CategoriaGastosScreen from '../../screens/CategoriaGastosScreen';
import CategoriaIngresosScreen from '../../screens/CategoriaIngresosScreen';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from '../../screens/Login';
import RegisterScreen from '../../screens/Register';
import HomeScreenUser from '../../screens/HomeUser';

const HomeStackNavigator = createNativeStackNavigator();

function StackMovimientos() {
  return(
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
      name="Ingresos"
      component={MoviIngreScreen}
      options={{headerShown:false, animation:"none"}}
      />
      <HomeStackNavigator.Screen
      name="Gastos"
      component={MoviGastosScreen}
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

function StackcCategorias() {
  return(
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
      name="CategoriaIngresos"
      component={CategoriaIngresosScreen}
      options={{headerShown:false, animation:"none"}}
      />
      <HomeStackNavigator.Screen
      name="CategoriaGastos"
      component={CategoriaGastosScreen}
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
      <Drawer.Screen name="HomeUser" component={HomeScreenUser} />
      <Drawer.Screen name="Inicio" component={HomeScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="home" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Movimientos" component={StackMovimientos} options={{drawerIcon: ({ color, size }) => (<Icon name="exchange" color="white" size={size} /> ),}}/> 
      <Drawer.Screen name="Categorias" component={StackcCategorias} options={{drawerIcon: ({ color, size }) => (<Icon name="th-large" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Ajustes" component={AjusteScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="briefcase" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Acerca De" component={AcercaScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="comment-o" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Cerrar Sesión" component={HomeScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="sign-in" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Stack" component={StackScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="stack-exchange" color="white" size={size} /> ),}}/>
      <Drawer.Screen name="Registro" component={RegisterScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}
