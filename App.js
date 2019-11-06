/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

// import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Pagina from "./src/pagina"
import Camara from "./src/camara"

const MainNavigator = createStackNavigator(
  {
    Pagina,
    Camara
    // Loading: Loading,
  },
  // {
  //   initialRouteName: 'Login'
  // }
  {
    // headerMode: 'none',
     initialRouteName: 'Pagina',
    //navigationOptions: {
    //  headerVisible: false,
    //}
  }
)

const AppNavigator = createAppContainer(MainNavigator)

class App extends React.Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}

export default App;
