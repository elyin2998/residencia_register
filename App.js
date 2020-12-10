
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, HeaderHeightContext} from '@react-navigation/stack'

const Stack= createStackNavigator()

import ActivityList from './screens/ActivityList'
import CreateActivityScreen from './screens/CreateActivityScreen'
import ActivityDetailScreen from './screens/ActivityDetailScreen'
import AboutScreen from './screens/AboutScreen'

function MyStack(){
  return(
    <Stack.Navigator 
    screenOptions= {{ 
      headerStyle:{
        backgroundColor: "#3d37b0p"
      },
      headerTintColor:"#e9eff2",
      headerTitleStyle:{
        fontWeight: "bold"
        
      }

    }}>



      <Stack.Screen name="ActivityList" component={ActivityList} options={{title: 'Lista de Actividades'} }/>
      <Stack.Screen name="CreateActivityScreen" component={CreateActivityScreen} options= {{title: 'Crear Actividad'}}/>
      <Stack.Screen name="ActivityDetailScreen" component={ActivityDetailScreen} options= {{title: 'Detalle Actividades'}}/>
      <Stack.Screen name="AboutScreen" component={AboutScreen} options= {{title: 'About Aplication'}}/>
    </Stack.Navigator>

  )
}

export default function App() {
  return (

    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#202421',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
