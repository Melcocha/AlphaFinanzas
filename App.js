import React from 'react';
import 'react-native-gesture-handler';
import LoginNavigation from './src/navigation/LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
};
export default App;


