import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import Especies from './Screens/Especies';
import Teste from './Screens/Teste';
import InformacoesAnimais from './Screens/InformacoesAnimais';
import Rios from './Screens/Rios';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Around You" component={Especies}/>
        <Stack.Screen name='Teste' component={Teste}/>
        <Stack.Screen name="Information" component={InformacoesAnimais}/>
        <Stack.Screen name="Water Course in the Region" component={Rios}/>
    </Stack.Navigator>
    </NavigationContainer>

  );
}

