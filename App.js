import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, PaginaInicial, Produtos} from './pages'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer initialRouteName='Pagina Inicial' headerMode='screen'>
        <Stack.Navigator>
            <Stack.Screen name='PaginaInicial' component ={PaginaInicial} options= {{title: 'Pagina Inicial'}} />
            <Stack.Screen name='Login' component ={Login} options= {{title: 'Login'}} />
             <Stack.Screen name='Produtos' component ={Produtos} options= {{title: 'Produtos'}} />
        </Stack.Navigator>
              
    </NavigationContainer>
  );
}

