import 'react-native-gesture-handler';
// Libraries - gesture handler must be first on this file, all others below
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// Pages
import DrawerPage from './pages_test/DrawerPage';
import StackPage from './pages_test/StackPage';

/*
 * App
 */

export default function App() {
  return (
    <NavigationContainer>
      <DrawerPage />
      {/* <StackPage /> */}

      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
