
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './Navigation';
import 'react-native-gesture-handler';
//import { MyDrawer } from './src/navigation/DrawerNavigation';


export default function App() {
  return (
    <Navigation/>
  );
} 

/* const App = () => {
  return (
    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>
  )
}

export default App */

