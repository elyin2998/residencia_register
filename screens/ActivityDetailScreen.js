import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";

import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import firebase from "../database/firebase";
import AboutScreen from "./AboutScreen";
import ActivityList from "./ActivityList";

const ActivityDetailScreen = (props) => {
  const estadoInicial = {
    id: "",
    nombre: "",
    dia: "",
    estudiante: "",
  };

const [actividad, setActividad] = useState();
const [loading, setLoading] = useState(true);

const getUserById = async (id) => {
  const dbRef = firebase.db.collection("activities").doc(id);
  const doc = await dbRef.get();
  const actividad = doc.data();
  setActividad({
    ...actividad,
    id: doc.id,
  });

  setLoading(false);
};

useEffect(() => {
  getUserById(props.route.params.actividadId);
}, []);

const handleChangeText = (nombre, value) => {
  setActividad({ ...actividad, [nombre]: value });
};

const deleteActivity = async () => {
  const dbRef = firebase.db.collection("activities").doc(props.route.params.actividadId);
  await dbRef.delete();
  props.navigation.navigate(ActivityList);
};
const updateActivity = async () => {
  const dbRef = firebase.db.collection("activities").doc(actividad.id);
  await dbRef.set({
    nombre: actividad.nombre,
    dia: actividad.dia,
    estudiante: actividad.estudiante,
  });
  setActividad(estadoInicial);
  props.navigation.navigate(ActivityList);
};

const openConfirmationAlert = () => {
  Alert.alert("borrar la actividad", "Estas seguro?", [
    { text: "yes", onPress: () => deleteActivity() },
    { text: "No", onPress: () => console.log("cancelado") },
  ]);
};


const nexActivity = () => {
  
  setActividad(estadoInicial);
  props.navigation.navigate(AboutScreen);
};




if (loading) {
  return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
  );
}

return (
  <ScrollView style={styles.container}>
    <View style={styles.imputGroup}>
      <TextInput
        placeholder="Nombre actividad"
        value={actividad.nombre}
        onChangeText={(value) => handleChangeText("nombre", value)}
      />
    </View>
    <View style={styles.imputGroup}>
      <TextInput
        placeholder="Dias"
        value={actividad.dia}
        onChangeText={(value) => handleChangeText("dia", value)}
      />
    </View>
    <View style={styles.imputGroup}>
      <TextInput
        placeholder="Estudiantes"
        value={actividad.estudiante}
        onChangeText={(value) => handleChangeText("estudiante", value)}
      />
    </View>
    <View style={stylos.botonGroup}>
      <Button title="Actualizar" onPress={() => updateActivity()}/>
    </View>

    <View style={stylos.botonGroup}>
      <Button title="Eliminar" onPress={() =>deleteActivity()}/>
    </View>

    <View style={stylos.botonGroup}>
    <Button title="Acerca de " onPress={() => nexActivity()}/>
    </View>


  </ScrollView>
);

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
   
    
    
  },
  imputGroup: {
    flex: 1,
    padding: 5,
    borderWidth:0,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

});

const stylos = StyleSheet.create({
  botonGroup: {
    marginBottom: 10,
    marginStart: 45,
    paddingBottom: 2,
    marginTop:10,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    borderRadius:30,
    backgroundColor: "#7a9af0"
    }
    

});

export default ActivityDetailScreen;
