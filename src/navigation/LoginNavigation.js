import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import auth from "@react-native-firebase/auth";


import LoginScreen from "../../screens/Login";
import RegisterScreen from "../../screens/Register";
import HomeUser from "../../screens/HomeUser";
import AjusteScreen from '../../screens/AjusteScreen';
import AcercaScreen from '../../screens/Acerca';
import MoviGastosScreen from '../../screens/MoviGastosScreen';
import MoviIngreScreen from '../../screens/MoviIngreScreen';
import CategoriaGastosScreen from '../../screens/CategoriaGastosScreen';
import CategoriaIngresosScreen from '../../screens/CategoriaIngresosScreen';
import CerrarSesion from '../../screens/CerrarSesion';
import AñadirIngresosScreen from '../../screens/AñadirIngresosScreen';
import AñadirGastosScreen from '../../screens/AñadirGastosScreen';
import HomeScreenIngresos from '../../screens/HomeScreenIngresos';
import HomeScreenGastos from '../../screens/HomeScreenGastos';
import Icon from 'react-native-vector-icons/FontAwesome';


const LogStack = createNativeStackNavigator();
const user = auth().currentUser;
const userEmail = user ? user.email : null;
console.log(userEmail);

export default function LoginNavigation(){
    return(
        <LogStack.Navigator screenOptions={{headerShown: false}}>
        <LogStack.Screen  name="LoginHome" component={HomeUser}/>
        <LogStack.Screen name="Login" component={LoginScreen}/>
        <LogStack.Screen name="Registro" component={RegisterScreen}/>
        <LogStack.Screen name="Inicio" component={CustomDrawerContent}/>
        </LogStack.Navigator>
    );
}



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
        name="AñadirGastos" 
        component={AñadirGastosScreen}
        options={{ headerShown: false, animation: "none" }}
      />
       <HomeStackNavigator.Screen
        name="AñadirIngresos" 
        component={AñadirIngresosScreen}
        options={{ headerShown: false, animation: "none" }}
      />
    </HomeStackNavigator.Navigator>
  )
}

function StackHome() {
  return(
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
      name="HomeIngresos"
      component={HomeScreenIngresos}
      options={{headerShown:false, animation:"none"}}
      />
      <HomeStackNavigator.Screen
      name="HomeGastos"
      component={HomeScreenGastos}
      options={{headerShown:false, animation:"none"}}
      />
      <HomeStackNavigator.Screen
        name="AñadirGastos" 
        component={AñadirGastosScreen}
        options={{ headerShown: false, animation: "none" }}
      />
       <HomeStackNavigator.Screen
        name="AñadirIngresos" 
        component={AñadirIngresosScreen}
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

 export function CustomDrawerContent(props) {
   
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
          <Drawer.Screen name="Inicio" component={StackHome} options={{drawerIcon: ({ color, size }) => (<Icon name="home" color="white" size={size} /> ),}}/>
          <Drawer.Screen name="Movimientos" component={StackMovimientos} options={{drawerIcon: ({ color, size }) => (<Icon name="exchange" color="white" size={size} /> ),}}/> 
          <Drawer.Screen name="Categorias" component={StackcCategorias} options={{drawerIcon: ({ color, size }) => (<Icon name="th-large" color="white" size={size} /> ),}}/>
          <Drawer.Screen name="Acerca De" component={AcercaScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="comment-o" color="white" size={size} /> ),}}/>
          <Drawer.Screen name="Ajustes" component={AjusteScreen} options={{drawerIcon: ({ color, size }) => (<Icon name="briefcase" color="white" size={size} /> ),}}/>
          <Drawer.Screen name="Cerrar Sesión" component={CerrarSesion} options={{drawerIcon: ({ color, size }) => (<Icon name="sign-in" color="white" size={size} /> ),}}/>
        </Drawer.Navigator>
      );
  }