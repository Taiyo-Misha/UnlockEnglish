
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import Router from './src/router/Router';


const App: () => React$Node = () => {
  return (
    <>
      
      <Router/>
    </>
  );
};



export default App;
